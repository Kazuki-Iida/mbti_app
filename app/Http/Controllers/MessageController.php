<?php

namespace App\Http\Controllers;

use App\Models\Message;  
use App\Models\Talk;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Events\MessageSent;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function show(Talk $talk)
    {
        return Inertia::render('Chat/Chats')->with(['talkId' => $talk->id]);
    }
    // メッセージの取得するやつ
    public function fetchMessages(Message $message,Talk $talk)
    {
        //dd($talk->messages()->get());
        return $talk->messages()->with('user')->get();
        //return Message::with('user')->get();
    }
    
    // メッセージ送信するやつ
    public function sendMessage(Request $request,Message $message)
    {
        $user = Auth::user();
        // dd($request['message']);
        //dd($request['talk_id']);
        //dd($request);
        $talk_input = $request->all();
        $message->fill($talk_input)->save();
        // DBにメッセージを保存
        // $message = $user->messages()->create([
        //     'message' => $request['message'],
        // ]);
        broadcast(new MessageSent($user, $message))->toOthers();
    }
}
