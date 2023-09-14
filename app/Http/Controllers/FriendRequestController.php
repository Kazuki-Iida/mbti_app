<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FriendRequestController extends Controller
{
    public function index()
    {
        $user = \Auth::user();
        $requeters = $user->getRequesters();
        
        return Inertia::render(
            "Posts/RequestList", 
            [
                "requesters" => $requesters,
            ]
        );
    }
}
