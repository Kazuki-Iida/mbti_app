<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Post;
use App\Models\Mbti;

class UserController extends Controller
{
    public function profile(User $user, Mbti $mbti, Post $post)
    {
        // dd($user);
        $posts = $post->getOrderedParentPosts()->where('user_id', $user->id)->get();
        
        $loginUser = auth()->user();
        $likedPosts = $loginUser->likedPosts()->pluck('post_id');


        return Inertia::render(
        "Posts/Profile",
            [
                "user" => $user,
                "mbtis" => $mbti->get(),
                "posts" => $posts,
                "likedPosts" => $likedPosts,
            ]
        );
    }
    // public function saveOrder(Request $request)
    // {
    //     // ユーザーごとに順序情報を保存
    //     $user = \Auth::user();
    //     $newOrder = $request->input('order');
    //     dd($newOrder);
    //     // データベースに保存する処理
    //     // 例: $user->update(['order' => json_encode($newOrder)]);

    //     return response()->json(['message' => '順序が保存されました']);
    // }
}
