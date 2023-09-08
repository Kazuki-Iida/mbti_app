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
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => '#ハッシュタグ ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => 1,
            'body' => 'esfjesfjesfj#ハッシュタグ esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => 2,
            'body' => 'esfjesf#ハッシュタグjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => 2,
            'body' => '#mbti ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => 2,
            'body' => 'esfjesfjesfjesfj#mbti esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => 3,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ#mbti ESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => 3,
            'body' => '#ハッカソンesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => 4,
            'body' => 'ESFJESFJESFJESFJESF#ハッカソン ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => 4,
            'body' => 'esfj#ハッカソン esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => 1,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => 1,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => 1,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => 1,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 2,
            'parent_post_id' => null,
            'body' => 'INTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 2,
            'parent_post_id' => null,
            'body' => 'intpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 2,
            'parent_post_id' => null,
            'body' => 'INTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 2,
            'parent_post_id' => null,
            'body' => 'intpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 2,
            'parent_post_id' => null,
            'body' => 'INTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 2,
            'parent_post_id' => null,
            'body' => 'intpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 2,
            'parent_post_id' => null,
            'body' => 'INTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTPINTP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 2,
            'parent_post_id' => null,
            'body' => 'intpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintpintp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => 'ENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => 'enfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => 'ENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => 'enfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => 'ENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => 'enfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => 'ENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => 'enfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => 'ENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => 'enfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => 'ENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => 'enfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'esfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfjesfj',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 1,
            'parent_post_id' => null,
            'body' => 'ESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJESFJ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => 'ENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFPENFP',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 3,
            'parent_post_id' => null,
            'body' => 'enfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfpenfp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        
    }
}
