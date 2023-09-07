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
        //あとでできたらparentPosts()を先にもってくるのを試してみる。
        // モデルで記述したからeagerローディングの記述いらないかな。
        // $posts = Post::with("user:id,name,image_path.mbti", "images")->parentPosts()->get();
        $posts = $post->parentPost()->get();
        return Inertia::render(
            "Posts/Index", 
            ["posts" => $posts,]
        );
    }

    public function getFilteredPosts()
    {

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

        return Inertia::render(
            "Posts/Show", 
            ["post" => $post,]
        );
    }

    public function store(PostRequest $request, Post $post)
    {
        $post_input = $request['post'];
        $post_input += ['user_id' => \Auth::id()];
        
        try
        {
            $saveSuccess = $post->fill($post_input)->save();
            if ($saveSuccess)
            {
                return response()->json(['message' => '保存に成功しました'], 200);
            } else {
                return response()->json(['message' => '保存に失敗しました'], 500);
            }
        } catch (Exception $e) {
            return response()->json(['message' => '保存に失敗しました'], 500);
        }
    }

    public function delete()
    {
        
    }
}
