<?php

namespace App\Http\Controllers;

use App\Models\Hashtag;
use App\Models\Image;
use App\Models\Mbti;
use App\Models\Post;
use App\Models\User;
use Cloudinary;
use Exception;
use App\Http\Requests\PostRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(Request $request, Post $post, Mbti $mbti)
    {
        $mbti_name = 'Home';
        $query = $post->getOrderedParentPosts();
        
        // dd($mbti->users()->pluck('id')->toArray());
        if (isset($mbti->name))
        {
            $mbti_name = $mbti->name;
            $mbtiUserIdArray = $mbti->users()->pluck('id')->toArray();
            $query->whereIn('user_id', $mbtiUserIdArray);
        }
        
        if (isset($request['search']))
        {
            $search = $request['search'];
            $spaceConversion = mb_convert_kana($search, 's');
            $wordArraySearched = preg_split('/[\s,]+/', $spaceConversion, -1, PREG_SPLIT_NO_EMPTY);
            
            foreach($wordArraySearched as $value) {
                $query->where('body', 'like', '%'.$value.'%');
            }
            $posts = $query->get();
        } else {
            $posts = $query->get();
        }
        $user = auth()->user();
        $likedPosts = $user->likedPosts()->pluck('post_id');
        $friends = $user->friends()->get(); 
        
        $permitters = $user->permitters()->get();
        
        //ハッシュタグをリンクにする
        foreach ($posts as $post)
        {
            preg_match_all("/(#\S+)/", $post->body, $matches);
            // dd($post->body);
            // 抽出したハッシュタグをリンクに変換
            foreach ($matches[0] as $match)
            {
                $hashtag = str_replace('#', '', $match); // ハッシュタグの#を削除
                $post->body = str_replace($match, '<a href="/hashtags/' . $hashtag . '" class="hashtag">' . $match . '</a>', $post->body);
            }
        }
        
        return Inertia::render(
                "Posts/Index", 
                [
                    "posts" => $posts,
                    "likedPosts" => $likedPosts,
                    "friends" => $friends,
                    "permitters" => $permitters,
                    "mbti_name" => $mbti_name
                ]
            );
    }
    
    public function hashtagIndex($hashtagName)
    {
        // dd($hashtag);
        $mbti_name = 'Home';
        
        $user = auth()->user();
        $likedPosts = $user->likedPosts()->pluck('post_id');
        $friends = $user->friends()->get(); 
        
        $permitters = $user->permitters()->get();
        
        $hashtag = Hashtag::where('name', $hashtagName)->first();
        $posts = $hashtag->posts()->get();
        // dd($hashtag);
        
        //ハッシュタグをリンクにする
        foreach ($posts as $post)
        {
            preg_match_all("/(#\S+)/", $post->body, $matches);
            // dd($post->body);
            // 抽出したハッシュタグをリンクに変換
            foreach ($matches[0] as $match)
            {
                $hashtag = str_replace('#', '', $match); // ハッシュタグの#を削除
                $post->body = str_replace($match, '<a href="/hashtags/' . $hashtag . '" class="hashtag">' . $match . '</a>', $post->body);
            }
        }
        
        return Inertia::render(
                "Posts/Index", 
                [
                    "posts" => $posts,
                    "likedPosts" => $likedPosts,
                    "friends" => $friends,
                    "permitters" => $permitters,
                    "mbti_name" => $mbti_name
                ]
            );
    }


    public function show(Post $post, Mbti $mbti)
    {
        $parentPost = $post->parentPost()->withCount('likes')->withCount('childPosts')->first();
        // $parentPosts = [];
        // while ($parentPost)
        // {
        //     array_push($parentPosts, $parentPost);

        //     if ($parentPost->parentPost)
        //     {
        //         $parentPost = $post->parentPost()->withCount('likes')->first();
        //     } else {
        //         break;
        //     }
        // }
        $postId = $post->id;
        $showPost = Post::withCount('likes')->withCount('childPosts')->find($postId);
        
        // $parentPost = array_reverse($parentPost);

        $childPosts = $post->getOrderedChildPosts();
        
        // $post = $post->withCount('likes')->first();
        
       
        // dd($childPosts);
        
        $user = auth()->user();
        $likedPosts = $user->likedPosts()->pluck('post_id');
        
        $friends = $user->friends()->get(); 
        
        $permitters = $user->permitters()->get(); 
        
        preg_match_all("/(#\S+)/", $showPost->body, $matches);
        // dd($post->body);
        // 抽出したハッシュタグをリンクに変換
        foreach ($matches[0] as $match)
        {
            $hashtag = str_replace('#', '', $match); // ハッシュタグの#を削除
            $showPost->body = str_replace($match, '<a href="/hashtags/' . $hashtag . '" class="hashtag">' . $match . '</a>', $showPost->body);
        }
        
        return Inertia::render(
                "Posts/Show", 
                [
                    "post" => $showPost,
                    "parent_post" => $parentPost,
                    "child_posts" => $childPosts,
                    "likedPosts" => $likedPosts,
                    "friends" => $friends,
                    "permitters" => $permitters,
                    "mbtis" => $mbti->get(),
                ]
            );
    }
    
    
    public function parentCreate()
    {
        return Inertia::render("Posts/ParentCreate");
    }
    
    
    public function childCreate(Post $post)
    {
        return Inertia::render(
                "Posts/ChildCreate",
                [
                    "parent_post" => $post
                ]
            );
    }


    public function store(PostRequest $request, Post $post)
    {
        //●postの保存
        //Posts/ParentCreateからはparent_post_idが渡されなくて、Posts/ChildCreateからはparent_post_idが渡されるから子投稿の時だけparent_post_idが自動でfillされる寸法！(parent_post_idはnull許容)
        $post_input = $request->all(); 
        $post_input['user_id'] = \Auth::id();
        $post->fill($post_input)->save();
        
        //●ハッシュタグの保存
        $post_body = $post->body;
        $hashtags = [];
        
        preg_match_all("/(#\S+)/", $post_body, $hashtags); //正規表現を用いてハッシュタグを見つけて配列($hashtags)に入れる。
        foreach ($hashtags[1] as $tag) {
            $tag = ltrim($tag, '#'); //先頭の`#`を削除。
            $hashtag = Hashtag::firstOrCreate(['name' => $tag]); //すでにhashtagテーブルにある場合はfirst、なければcreateする。
            $post->hashtags()->attach($hashtag); //postと紐づけて保存。
        }
        
        //●画像の保存
        
        $request_images = $request->file('images');
       
        if (isset($request_images))
        {
            foreach ($request_images as $request_image)
            {
                $image_path = Cloudinary::upload($request_image->getRealPath())->getSecurePath();
                Image::create([
                        'post_id' => $post->id,
                        'image_path' => $image_path,
                    ]);
            }
        }
        
        return redirect()->route('post.show', ["post" => $post->id]);
    }
    

    public function delete(Post $post)
    {
        $post->delete();
        
        if ($request->is('profile/*')) {
            // プロフィールページから削除した場合
            return redirect()->route('profile.show', ['user' => Auth::id()]);
        } else {
            // トップページから削除した場合
            return redirect()->route('posts.index');
        }
    }
}
