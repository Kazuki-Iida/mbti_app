<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(MbtiSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(PostSeeder::class);
        $this->call(HashtagSeeder::class);
        $this->call(HashtagPostSeeder::class);
        // $this->call(TalkSeeder::class);
        $this->call(FriendRequestSeeder::class);
    }
}
