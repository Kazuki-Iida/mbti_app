<?php

namespace App\Http\Controllers;

use App\Models\Friend;
use App\Models\FriendRequest;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class FriendController extends Controller
{
    public function index()
    {
        $user = \Auth::user();
        $friends = $user->getOrderedFriends();
        
        return Inertia::render(
            "Posts/FriendList", 
            [
                "friends" => $friends,
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
        $requester = User::first($request['requester_id']);
        $permitter = \Auth::user();
        try
        {
            $friendRequest = FriendRequest::where('requester', $requester->id)->where('permitter', $permitter->id)->first();
            $deleteSuccess = $friendRequest->delete();
            $friendCheck = Friend::where('user_id', $requester->id)->where('friend_id', $permitter->id)->first();
            if (!$requester->isFriend($permitter->id))
            {
                $requesterSaveSuccess = $requester->friends()->attach($permitter->id);
                $permitterSaveSuccess = $permitter->friends()->attach($requester->id);
            }
            
            if ($deleteSuccess && $permitterSaveSuccess && $requesterSaveSuccess)
            {
                return response()->json(['message' => '繋がり申請承認に成功しました'], 200);
            } else {
                return response()->json(['message' => '繋がり申請承認に失敗しました'], 500);
            }
        } catch (Exception $e) {
            return response()->json(['message' => '繋がり申請承認に失敗しました'], 500);
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
