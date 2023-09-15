<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mbti extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'talk_id',
        'message',
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
