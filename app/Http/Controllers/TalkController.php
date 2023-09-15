<?php

namespace App\Http\Controllers;

use App\Models\Talk;
use App\Models\Message;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TalkController extends Controller
{
    public function store(Request $request)
    {
        $owner = $request['owner'];
        $guest = $request['guest'];
        try
        {
            $talk = Talk::create([
                    'last_sent_at' => Carbon::now(),
                    'owner_id' => $owner->id,
                    'guest_id' => $guest->id,
                ]);
            
            $firstMessageSuccess = Message::create([
                    'user_id' => $owner->id,
                    'talk_id' => $talk->id,
                    'message' => $request['request_message'],
                ]);
            if ($talk && $firstMessageSuccess)
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
