<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mbti;
use Inertia\Inertia;

class FriendRequestController extends Controller
{
    public function index(Mbti $mbti)
    {
        $user = \Auth::user();
        $friendRequests = $user->requestedFriendRequests()->get();
        
        // dd($friendRequests);
        
        return Inertia::render("Posts/RequestList", ["requests" => $friendRequests, "mbtis" => $mbti->get()]);
    }
}
