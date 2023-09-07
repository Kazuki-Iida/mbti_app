<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HashtagPostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('hashtag_post')->insert([
            'hashtag_id' => 1,
            'post_id' => 1,
        ]);
        DB::table('hashtag_post')->insert([
            'hashtag_id' => 1,
            'post_id' => 2,
        ]);
        DB::table('hashtag_post')->insert([
            'hashtag_id' => 1,
            'post_id' => 3,
        ]);
        DB::table('hashtag_post')->insert([
            'hashtag_id' => 2,
            'post_id' => 4,
        ]);
        DB::table('hashtag_post')->insert([
            'hashtag_id' => 2,
            'post_id' => 5,
        ]);
        DB::table('hashtag_post')->insert([
            'hashtag_id' => 2,
            'post_id' => 6,
        ]);
        DB::table('hashtag_post')->insert([
            'hashtag_id' => 3,
            'post_id' => 7,
        ]);
        DB::table('hashtag_post')->insert([
            'hashtag_id' => 3,
            'post_id' => 8,
        ]);
        DB::table('hashtag_post')->insert([
            'hashtag_id' => 3,
            'post_id' => 9,
        ]);
    }
}
