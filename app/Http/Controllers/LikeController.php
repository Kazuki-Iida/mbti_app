<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Inertia\Inertia;

class LikeController extends Controller
{
    public function isLiked()
    {
        
         $user = auth()->user(); 
        
         $likedPosts = $user->likedPosts()->pluck('post_id');
        
        return response()->json([
            "likedPosts" => $likedPosts,
        ]);
    }
    
    
    
    
   public function like(Post $post)
    {
        $user = auth()->user();
    
        if (!$user->hasLiked($post)) {
            $user->like($post);
            $likesCount = $post->likes()->count(); // 新しいいいねのカウントを取得
            return response()->json(['message' => 'Liked successfully', 'likes_count' => $likesCount]);
        }
    
        return response()->json(['message' => 'Already liked']);
    }
        
    public function dislike(Post $post)
    {
        $user = auth()->user();
    
        if ($user->hasLiked($post)) {
            $user->unlike($post);
            $likesCount = $post->likes()->count(); // 新しいいいねのカウントを取得
            return response()->json(['message' => 'Disliked successfully', 'likes_count' => $likesCount]);
        }
    
        return response()->json(['message' => 'Not liked']);
    }
}
