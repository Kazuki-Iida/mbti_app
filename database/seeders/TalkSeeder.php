<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use DateTime;

class TalkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('talks')->insert([
            'owner_id' => 1,
            'guest_id' => 2,
            'last_sent_at' => new DateTime(),
        ]);
        DB::table('talks')->insert([
            'owner_id' => 1,
            'guest_id' => 3,
            'last_sent_at' => new DateTime(),
        ]);
    }
}
