<?php

use App\Http\Controllers\FriendController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//何となくアルファベット順

Route::get('/', [PostController::class, 'index'])->name('post.index');
Route::get('/posts/{post}', [PostController::class, 'show'])->name('post.show');

Route::middleware('auth')->group(function () {
    Route::post('/block', [UserController::class, 'block'])->name('block');
    Route::delete('/unblock', [UserController::class, 'unblock'])->name('unblock');
    
    //ルーティングはlikeひとつにまとめてif文でいいねといいね解除してもいいけど別な方がいいかも？
    Route::post('/like', [LikeController::class, 'like'])->name('like');
    Route::delete('/unlike', [LikeController::class, 'unlike'])->name('unlike');
    
    Route::get('/posts/parent/create', [PostController::class, 'parentCreate'])->name('post.parent.create');
    Route::get('/posts/create/{post}', [PostController::class, 'childCreate'])->name('post.child.create');
    Route::post('/store', [PostController::class, 'store'])->name('post.store');
    Route::delete('/posts/{post}', [PostController::class, 'delete'])->name('post.delete');
    
    Route::post('/request', [FriendController::class, 'request'])->name('friend.request');
    Route::delete('/request', [FriendController::class, 'unrequest'])->name('friend.unrequest');
    Route::post('/permit', [friendController::class, 'permit'])->name('friend.permit');
    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
