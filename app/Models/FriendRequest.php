<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FriendRequest extends Model
{
    use HasFactory;
    
    public $timestamps = false;
    
    protected $fillable = ['requester_id', 'permitter_id', 'message', 'post_id'];
}
