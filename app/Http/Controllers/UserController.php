<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Mbti;

class UserController extends Controller
{
    public function profile(User $user, Mbti $mbti)
    {
        
        return Inertia::render(
        "Posts/Profile",
            [
                "user" => $user,
                "mbtis" => $mbti->get(),
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
