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
            'hashtag_id' => 2,
            'post_id' => 1,
        ]);
        DB::table('hashtag_post')->insert([
            'hashtag_id' => 1,
            'post_id' => 52,
        ]);
        DB::table('hashtag_post')->insert([
            'hashtag_id' => 1,
            'post_id' => 35,
        ]);
        DB::table('hashtag_post')->insert([
            'hashtag_id' => 2,
            'post_id' => 50,
            
        ]);
        DB::table('hashtag_post')->insert([
            'hashtag_id' => 2,
            'post_id' => 16,
        ]);
        
        DB::table('hashtag_post')->insert([
            'hashtag_id' => 3,
            'post_id' => 9,
        ]);
       
    }
}
