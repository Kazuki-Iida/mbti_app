<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FriendRequestController extends Controller
{
    public function index()
    {
        $user = \Auth::user();
        $requesters = $user->getRequesters();
        
        return Inertia::render("Posts/RequestList", ["requesters" => $requesters,]);
    }
}
