<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;

class TalkController extends Controller
{
    public function store(Request $request)
    {
        $user = \Auth::user();
        
        try
            {
                $saveSuccess = Talk::create([
                        'last_sent_at' => Carbon::now(),
                        'owner_id' => $user_id,
                        'guest_id' => $request['guest_id'],
                    ])
                if ($saveSuccess)
                {
                    return response()->json(['message' => 'トークの作成に成功しました'], 200);
                } else {
                    return response()->json(['message' => 'トークの作成に失敗しました'], 500);
                }
            } catch (Exception $e) {
                return response()->json(['message' => 'トークの作成に失敗しました'], 500);
            }
    }
    
    
    // public function index()
    // {
    //     $user = \Auth::user();
    //     $ownerTalks = $user->ownerTalks()->get();
    //     $guestTalks = $user->guestTalks()->get();
        
    //     $merged_talks = collect($ownerTalks)->merge($guestTalks);
        
        
        
    //     return Inertia::render(
    //             "Posts/FriendList", 
    //             ["talks" => $talks,
    //             "likedPosts" => $likedPosts]
    //         );
    // }
}
