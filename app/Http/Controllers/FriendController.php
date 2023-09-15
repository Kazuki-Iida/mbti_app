<?php

namespace App\Http\Controllers;

use App\Models\Friend;
use App\Models\FriendRequest;
use App\Models\Talk;
use App\Models\Mbti;
use App\Models\Message;
use App\Models\Post;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FriendController extends Controller
{
    public function index(Mbti $mbti)
    {
        $user = \Auth::user();
        $friends = $user->getOrderedFriends();
        
        $userId = $user->id;

        //自分の参加しているトーク一覧を取得
        $talks = Talk::where('owner_id', $userId)->orWhere('guest_id', $userId)->get();
        // dd($talks);
        
        // dd($friends);
        
        return Inertia::render(
            "Posts/FriendList", 
            [
                "friends" => $friends,
                "mbtis" => $mbti->get(),
                "talks" => $talks,
            ]
        );
    }
    
    public function getFriendsList()
    {
        $user = auth()->user(); 
        $friends = $user->friends()->get(); 
    
        return response()->json($friends);
    }
    
    public function getPermittersList()
    {
        $user = \Auth::user(); 
        $permitters = $user->permitters()->get(); 

    
        return response()->json($permitters);
    }
        
    
    public function request(Request $request)
    {
        $requester = \Auth::user();
        $permitterId = $request['permitter_id'];
        
        
        if (!$requester->isFriend($permitterId))
        {
            try
            {
                $saveSuccess = FriendRequest::create([
                                    'requester_id' => $requester->id,
                                    'permitter_id' => $permitterId,
                                    'message' => $request['message'],
                                    'post_id' => $request['post_id']
                                ]);
                
                // dd($saveSuccess);
                if ($saveSuccess)
                {
                    return response()->json(['message' => '繋がり申請に成功しました'], 200);
                } else {
                    return response()->json(['message' => '繋がり申請に失敗しました'], 500);
                }
            } catch (Exception $e) {
                // dd($request);
                return response()->json(['message' => '繋がり申請に失敗しました'], 500);
            }
        } else {
            // dd($request);
            return response()->json(['message' => 'すでに繋がっています'], 500);
        }
    }
    
    
    public function unrequest(Request $request)
    {
        $requesterId = \Auth::id();
        $permitterId = $request['permitter_id'];
        try
        {
            $friendRequest = FriendRequest::where('requester', $requesterId)->where('permitter', $permitterId)->first();
            $deleteSuccess = $friendRequest->delete();
            if ($deleteSuccess)
            {
                return response()->json(['message' => '繋がり申請解除に成功しました'], 200);
            } else {
                return response()->json(['message' => '繋がり申請解除に失敗しました'], 500);
            }
        } catch (Exception $e) {
            return response()->json(['message' => '繋がり申請解除に失敗しました'], 500);
        }
        
    }
    
    
    public function permit(Request $request)
    {
        $requesterOne = $request->input('requester'); // リクエストからrequesterを取得
        $requester = User::find($requesterOne['id']);
        $permitter = \Auth::user();
        // dd($requester);
        try
        {
            $friendRequest = FriendRequest::where('requester_id', $requester->id)->where('permitter_id', $permitter->id)->first();
            $requestMessage = $friendRequest->message;
            $deleteSuccess = $friendRequest->delete();
            $friendCheck = Friend::where('user_id', $requester->id)->where('friend_id', $permitter->id)->first();
            if (!$requester->isFriend($permitter->id))
            {
                $requesterSaveSuccess = $requester->friends()->attach($permitter->id);
                $permitterSaveSuccess = $permitter->friends()->attach($requester->id);
            }
            // if ($deleteSuccess && $permitterSaveSuccess && $requesterSaveSuccess)
            // {
            
            $owner = $requester;
            $guest = $permitter;
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
                        'message' => $requestMessage,
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
         // } else {
            //     return response()->json(['message' => '繋がり申請承認に失敗しました'], 500);
            // }
        } catch (Exception $e) {
            return response()->json(['message' => 'すでにフレンドです'], 500);
        }
    }
    
    
    public function dismiss(Request $request)
    {
        $requesterId = $request['requester_id'];
        $permitterId = \Auth::id();
        try
        {
            $friendRequest = FriendRequest::where('requester', $requesterId)->where('permitter', $permitterId)->first();
            $deleteSuccess = $friendRequest->delete();
            
            if ($deleteSuccess)
            {
                return response()->json(['message' => '繋がり申請削除に成功しました'], 200);
            } else {
                return response()->json(['message' => '繋がり申請削除に失敗しました'], 500);
            }
        } catch (Exception $e) {
            return response()->json(['message' => '繋がり申請削除に失敗しました'], 500);
        }
    }
}
