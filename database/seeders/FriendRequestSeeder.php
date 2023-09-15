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
            'message' => '気が合いそうなのでお話ししてみたいです！',
            'post_id' => 1,
        ]);
        DB::table('friend_requests')->insert([
            'requester_id' => 3,
            'permitter_id' => 1,
            'message' => 'ぜひお話ししたいです！よろしくお願いします！',
            'post_id' => 1,
        ]);
        DB::table('friend_requests')->insert([
            'requester_id' => 4,
            'permitter_id' => 1,
            'message' => '一緒に遊びに行きたいです！',
            'post_id' => 1,
        ]);
        DB::table('friend_requests')->insert([
            'requester_id' => 5,
            'permitter_id' => 1,
            'message' => '投稿好きです！',
            'post_id' => 1,
        ]);
        DB::table('friend_requests')->insert([
            'requester_id' => 6,
            'permitter_id' => 1,
            'message' => '住み近そうなので仲良くしましょう！',
            'post_id' => 1,
        ]);
        DB::table('friend_requests')->insert([
            'requester_id' => 7,
            'permitter_id' => 1,
            'message' => 'ゲームしよ！',
            'post_id' => 1,
        ]);
        DB::table('friend_requests')->insert([
            'requester_id' => 8,
            'permitter_id' => 1,
            'message' => '趣味同じです！',
            'post_id' => 1,
        ]);
        DB::table('friend_requests')->insert([
            'requester_id' => 9,
            'permitter_id' => 1,
            'message' => '繋がりたい！',
            'post_id' => 1,
        ]);
        DB::table('friend_requests')->insert([
            'requester_id' => 10,
            'permitter_id' => 1,
            'message' => '先ほどはありがとうございました。',
            'post_id' => 1,
        ]);
        
    }
}
