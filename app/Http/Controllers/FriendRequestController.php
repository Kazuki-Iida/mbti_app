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
        $requesters = $user->getRequesters();
        
        return Inertia::render("Posts/RequestList", ["requesters" => $requesters, "mbtis" => $mbti->get()]);
    }
}
