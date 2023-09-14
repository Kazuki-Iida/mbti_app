<?php

use App\Http\Controllers\FriendController;
use App\Http\Controllers\FriendRequestController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PostController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//何となくアルファベット順


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::middleware('auth')->group(function () {
    // Route::post('/block', [UserController::class, 'block'])->name('block');
    // Route::delete('/unblock', [UserController::class, 'unblock'])->name('unblock');
    
    Route::get('/', [PostController::class, 'index'])->name('index');
    Route::post('/', [PostController::class, 'index'])->name('filtered.index');
    Route::get("/posts/isliked", [PostController::class, "isLiked"]);
    Route::get('/posts/{post}', [PostController::class, 'show'])->name('post.show');
    
    //ルーティングはlikeひとつにまとめてif文でいいねといいね解除してもいいけど別な方がいいかも？
    Route::post('/posts/{post}/like', [LikeController::class, "like"])->name('post.like');
    Route::post('/posts/{post}/dislike', [LikeController::class, "dislike"])->name('post.dislike');
    
    Route::get('/posts/parent/create', [PostController::class, 'parentCreate'])->name('post.parent.create');
    Route::get('/posts/create/{post}', [PostController::class, 'childCreate'])->name('post.child.create');
    Route::post('/store', [PostController::class, 'store'])->name('post.store');
    Route::delete('/posts/{post}', [PostController::class, 'delete'])->name('post.delete');
    
    Route::get('/friend/index', [FriendController::class, 'index'])->name('friend.index');

    Route::get('/friend/getFriendsList', [FriendController::class, 'getFriendsList'])->name('getFriendsList');
    Route::get('/friend/getPermittersList', [FriendController::class, 'getPermittersList'])->name('getPermittersList');

    Route::post('/friend/request', [FriendController::class, 'request'])->name('friend.request');
    Route::delete('/friend/unrequest', [FriendController::class, 'unrequest'])->name('friend.unrequest');
    Route::post('/request/permit', [FriendController::class, 'permit'])->name('friend.permit');
    Route::delete('/request/dismiss', [FriendController::class, 'dismiss'])->name('friend.dismiss');
    Route::get('/request/index', [FriendRequestController::class, 'index'])->name('request.index');
    
    //チャットルート
    Route::get('/chat/{talk}', [MessageController::class,'show'])->name('chat.index');
    Route::get('/messages/{talk}', [MessageController::class, 'fetchMessages'])->name('chat.fetch');
    //Route::get('/messages', [MessageController::class, 'fetchMessages'])->name('chat.fetch');
    Route::post('/messages', [MessageController::class, 'sendMessage'])->name('chat.store');
    
    // Route::post('/save-order', [UserController::class, 'saveOrder'])->name('save.order');

    Route::post('/talk/store', [TalkController::class, 'store'])->name('talk.store');
    
    Route::post('/save-order', [UserController::class, 'saveOrder'])->name('save.order');
    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::patch('/profile/image', [ProfileController::class, 'updateImage'])->name('profile.image.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
