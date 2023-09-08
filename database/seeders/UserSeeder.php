<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use DateTime;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => '領事官',
            'email' => 'ryojikan@gmail.com',
            'password' => Hash::make('ryojikan'),
            'user_id' => 'ryojikan',
            'mbti_id' => 1,
            'introduction' => 'ESFJで領事官型の飯田です！よろしくお願いします。',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '論理学者',
            'email' => 'ronrigakusya@gmail.com',
            'password' => Hash::make('ronrigakusya'),
            'user_id' => 'ronrigakusya',
            'mbti_id' => 16,
            'introduction' => 'INTPで論理学者型の小菅です！よろしくお願いします。',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '広報運動家',
            'email' => 'undouka@gmail.com',
            'password' => Hash::make('undouka'),
            'user_id' => 'undouka',
            'mbti_id' => 6,
            'introduction' => 'ENFPで広報運動家型の篠崎です！よろしくお願いします。',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}