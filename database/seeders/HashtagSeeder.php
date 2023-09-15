<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HashtagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('hashtags')->insert([
            'name' => 'ハッカソン',
        ]);
        DB::table('hashtags')->insert([
            'name' => '日本',
        ]);
        DB::table('hashtags')->insert([
            'name' => '日本代表',
        ]);
    }
}
