<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use DateTime;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('posts')->insert([
            'user_id' => 32,
            'parent_post_id' => null,
            'body' => '考えすぎて寝れないことがあります。',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => '#ハッカソン めっちゃ楽しかった！',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 2,
            'parent_post_id' => null,
            'body' => '人大好き',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'コミュニケーション能力高いと思う',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 2,
            'parent_post_id' => null,
            'body' => '人の手伝いするの楽しい',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => '自分を強く持ちたい。',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'がんばれニッポン！！',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => '#ハッカソン ほめられてうれしい！',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 4,
            'parent_post_id' => null,
            'body' => '歌を歌うのやっぱい楽しい。',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => '単純作業苦手だ―',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 4,
            'parent_post_id' => null,
            'body' => 'からおけいきたい',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 5,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 6,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 5,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 7,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 8,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 7,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 9,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 10,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 9,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 11,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 12,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 11,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 13,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 14,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 13,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 15,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 16,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 15,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 17,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 18,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 17,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 19,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 20,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 19,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 21,
            'parent_post_id' => null,
            'body' => 'INTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 22,
            'parent_post_id' => null,
            'body' => 'intpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 23,
            'parent_post_id' => null,
            'body' => 'INTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 24,
            'parent_post_id' => null,
            'body' => 'intpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 23,
            'parent_post_id' => null,
            'body' => 'INTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 25,
            'parent_post_id' => null,
            'body' => 'intpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 26,
            'parent_post_id' => null,
            'body' => 'INTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 25,
            'parent_post_id' => null,
            'body' => 'intpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 27,
            'parent_post_id' => null,
            'body' => 'ENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 28,
            'parent_post_id' => null,
            'body' => 'enfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 27,
            'parent_post_id' => null,
            'body' => 'ENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 29,
            'parent_post_id' => null,
            'body' => 'enfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 30,
            'parent_post_id' => null,
            'body' => 'ENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 29,
            'parent_post_id' => null,
            'body' => 'enfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 31,
            'parent_post_id' => null,
            'body' => 'ENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 32,
            'parent_post_id' => null,
            'body' => 'enfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 31,
            'parent_post_id' => null,
            'body' => 'ENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        
        
        
    }
}
