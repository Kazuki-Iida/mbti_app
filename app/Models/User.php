<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function requesters()
    {
        return $this->belongsToMany(self::class, 'friend_requests', 'requester_id', 'permitter_id');
    }

    public function permitters()
    {
        return $this->belongsToMany(self::class, 'friend_requests', 'permitter_id', 'requester_id');
    }

    public function blocks()
    {
        return $this->belongsToMany(self::class, 'blocks', 'blocker_id', 'blocked_id');
    }

    public function friends()
    {
        return $this->belongsToMany(self::class, 'friends', 'user_id', 'friend_id');
    }

    public function likedPosts()
    {
        return $this->belongsToMany(Like::class);
    }

    public function mbti()
    {
        return $this->belongsTo(Mbti::class);
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
