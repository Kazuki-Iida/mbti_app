<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FriendRequestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('friend_requests')->insert([
            'requester_id' => 2,
            'permitter_id' => 1,
            'message' => 'メッセージ',
            'post_id' => 1,
        ]);
        DB::table('friend_requests')->insert([
            'requester_id' => 3,
            'permitter_id' => 1,
            'message' => 'メッセージ',
            'post_id' => 1,
        ]);
    }
}
