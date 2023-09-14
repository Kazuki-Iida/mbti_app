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
    
    public function likedPosts()
    {
        return $this->belongsToMany(Post::class, 'likes', 'user_id', 'post_id')->withTimestamps();
    }
    
    public function like(Post $post)
    {
        $this->likedPosts()->attach($post);
    }
    
    public function unlike(Post $post)
    {
        $this->likedPosts()->detach($post);
    }
    
    public function hasLiked(Post $post)
    {
        return $this->likedPosts->contains($post);
    }
    
    public function getOrderedFriends()
    {
        return $this->friends()->orderaby('created_at', 'DESC')->get();
    }
    
    public function getRequesters()
    {
        return $this->requesters()->get();
    }
    
    public function getPermitters()
    {
        return $this->permitters()->get();
    }
    
    public function isFriend(int $friend_id)
    {
        return (boolean) $this->friends($friend_id)->first();
    }
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'image_path',
        'mbti_id'
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
        'mbti_id' => 'integer',
    ];
    

    

    public function messages()
    {
        return $this->hasMany(Message::class);
    } 
 


    public function requesters()
    {
        return $this->belongsToMany(self::class, 'friend_requests', 'permitter_id', 'requester_id');
    }

    public function permitters()
    {
        return $this->belongsToMany(self::class, 'friend_requests', 'requester_id', 'permitter_id');
    }

    public function blocks()
    {
        return $this->belongsToMany(self::class, 'blocks', 'blocker_id', 'blocked_id');
    }

    public function friends()
    {
        return $this->belongsToMany(self::class, 'friends', 'user_id', 'friend_id');
    }


    public function mbti()
    {
        return $this->belongsTo(Mbti::class);
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
    
    public function ownerTalks()
    {
        return $this->hasMany(Talk::class, 'owner_id');
    }
    
    public function guestTalks()
    {
        return $this->hasMany(Talk::class, 'guest_id');
    }

}