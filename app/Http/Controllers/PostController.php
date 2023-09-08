<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
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
        //Posts/ParentCreateからはpost_id(parent_idのことね)が渡されなくて、Posts/ChildCreateからはpost_idが渡されるから子投稿の時だけpost_idが自動でfillされる寸法！(post_idはnull許容)
        $post_input = $request['post'];
        $post_input += ['user_id' => \Auth::id()];
        
        $post->fill($post_input)->save();
        
        return redirect()->route('post.show', ["post" => $post->id]);
        
        // try
        // {
        //     $saveSuccess = $post->fill($post_input)->save();
        //     if ($saveSuccess)
        //     {
        //         return response()->json(['message' => '保存に成功しました'], 200);
        //     } else {
        //         return response()->json(['message' => '保存に失敗しました'], 500);
        //     }
        // } catch (Exception $e) {
        //     return response()->json(['message' => '保存に失敗しました'], 500);
        // }
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
