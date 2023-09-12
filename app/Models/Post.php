<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;


class Post extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $with = ["user.mbti", "images"];
    
    protected $fillable = [
        'body',
        'user_id',
        'parent_post_id',
    ];
    
    public function scopeParentPosts($query)
    {
        return $query->whereNull('parent_post_id');
    }
    
    public function getOrderedChildPosts()
    {
        return $this->childPosts()->orderBy('created_at', 'DESC')->get();
    }
    
    public function getOrderedParentPosts()
    {
        return $this->parentPosts()->orderBy('created_at', 'DESC')->get();
    }
    
    public function hashtags()
    {
        return $this->belongsToMany(Hashtag::class);
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }

    public function likedUsers()
    {
        return $this->hasManny(Like::class);
    }

    public function parentPost()
    {
        return $this->belongsTo(self::class);
    }


    // // 親ポスト(parent_idがnullのpost)の取得
    // $parentPosts = Post::parentPosts()->get();

    // // 特定の親ポストの子ポストを取得
    // $parentPost = Post::find($parentId);
    // $replies = $parentPost->replies;

    public function childPosts()
    {
        return $this->hasMany(Post::class, 'parent_post_id');
    }
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
