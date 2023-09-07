<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;


class Post extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $with = ["user:id,name,image_path.mbti", "images"];
    
    protected $fillable = [
        'user_id',
        'post_id',
        'body'
    ];

    public function images()
    {
        return $this->hasMany(Post::class);
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

    public function replies()
    {
        return $this->hasMany(Post::class, 'parent_id');
    }
    
    public function scopeParentPosts($query)
    {
        return $query->whereNull('parent_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
