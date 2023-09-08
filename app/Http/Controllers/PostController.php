<?php

namespace App\Http\Controllers;

use App\Models\Hashtag;
use App\Models\Image;
use App\Models\Post;
use App\Models\User;
use Cloudinary;
use Exception;
use Illuminate\Http\PostRequest;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(Post $post)
    {
        //絞り込みとか検索のコードはあとで！！
        
        //あとでできたらparentPosts()を先にもってくるのを試してみる。
        // モデルで記述したからeagerローディングの記述いらないかな。
        $posts = $post->parentPosts()->get();
        return Inertia::render(
                "Posts/Index", 
                ["posts" => $posts,]
            );
    }


    public function show(Post $post)
    {
        $parent_post = $post->parentPost();
        $parent_posts = [];
        while ($parent_post)
        {
            array_push($parent_posts, $parent_post);

            if ($parent_post->parentPost())
            {
                $parent_post = $parent_post->parentPost();
            } else {
                break;
            }
        }
        
        $parent_posts = array_reverse($parent_posts);

        return Inertia::render(
                "Posts/Show", 
                [
                    "post" => $post,
                    "parent_posts" => $parent_posts,
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
        $post_input = $request['post'];
        $post_input += ['user_id' => \Auth::id()];
        $post->fill($post_input)->save();
        
        //●ハッシュタグの保存
        $post_body = $post->body;
        $hashtags = [];
        preg_match_all("/#([a-zA-z0-9０-９ぁ-んァ-ヶ亜-熙]+)/u", $post_body, $hashtags); //正規表現を用いてハッシュタグを見つけて配列($hashtags)に入れる。
        foreach ($hashtags[1] as $tag) {
            $tag = ltrim($tag, '#'); //先頭の`#`を削除。
            $hashtag = Hashtag::firstOrCreate(['name' => $tag]); //すでにhashtagテーブルにある場合はfirst、なければcreateする。
            $post->hashtags()->attach($hashtag); //postと紐づけて保存。
        }
        
        //●画像の保存
        $request_images = $request->file('images_array');
        if (isset($images))
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
