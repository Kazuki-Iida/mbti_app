<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Talk extends Model
{
    use HasFactory;
    public $timestamps = false;
    
    protected $fillable = [
        'last_sent_at',
        'owner_id',
        'guest_id',
    ];
    
    public function messages()
    {
        return $this->hasMany(Message::class);
    }
    public function user()
    {
        return $this->belongsToMany(User::class);
    }
}
