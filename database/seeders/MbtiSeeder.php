<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MbtiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('mbtis')->insert([
            'name' => 'ESFJ',
            'first_letter' => 'E',
            'second_letter' => 'S',
            'third_letter' => 'F',
            'fourth_letter' => 'J',
        ]);
        DB::table('mbtis')->insert([
            'name' => 'ESFP',
            'first_letter' => 'E',
            'second_letter' => 'S',
            'third_letter' => 'F',
            'fourth_letter' => 'P',
        ]);
        DB::table('mbtis')->insert([
            'name' => 'ESTJ',
            'first_letter' => 'E',
            'second_letter' => 'S',
            'third_letter' => 'T',
            'fourth_letter' => 'J',
        ]);
        DB::table('mbtis')->insert([
            'name' => 'ESTP',
            'first_letter' => 'E',
            'second_letter' => 'S',
            'third_letter' => 'T',
            'fourth_letter' => 'P',
        ]);
        DB::table('mbtis')->insert([
            'name' => 'ENFJ',
            'first_letter' => 'E',
            'second_letter' => 'N',
            'third_letter' => 'F',
            'fourth_letter' => 'J',
        ]);
        DB::table('mbtis')->insert([
            'name' => 'ENFP',
            'first_letter' => 'E',
            'second_letter' => 'N',
            'third_letter' => 'F',
            'fourth_letter' => 'P',
        ]);
        DB::table('mbtis')->insert([
            'name' => 'ENTJ',
            'first_letter' => 'E',
            'second_letter' => 'N',
            'third_letter' => 'T',
            'fourth_letter' => 'J',
        ]);
        DB::table('mbtis')->insert([
            'name' => 'ENTP',
            'first_letter' => 'E',
            'second_letter' => 'N',
            'third_letter' => 'T',
            'fourth_letter' => 'P',
        ]);
        DB::table('mbtis')->insert([
            'name' => 'ISFJ',
            'first_letter' => 'I',
            'second_letter' => 'S',
            'third_letter' => 'F',
            'fourth_letter' => 'J',
        ]);
        DB::table('mbtis')->insert([
            'name' => 'ISFP',
            'first_letter' => 'I',
            'second_letter' => 'S',
            'third_letter' => 'F',
            'fourth_letter' => 'P',
        ]);
        DB::table('mbtis')->insert([
            'name' => 'ISTJ',
            'first_letter' => 'I',
            'second_letter' => 'S',
            'third_letter' => 'T',
            'fourth_letter' => 'J',
        ]);
        DB::table('mbtis')->insert([
            'name' => 'ISTP',
            'first_letter' => 'I',
            'second_letter' => 'S',
            'third_letter' => 'T',
            'fourth_letter' => 'P',
        ]);
        DB::table('mbtis')->insert([
            'name' => 'INFJ',
            'first_letter' => 'I',
            'second_letter' => 'N',
            'third_letter' => 'F',
            'fourth_letter' => 'J',
        ]);
        DB::table('mbtis')->insert([
            'name' => 'INFP',
            'first_letter' => 'I',
            'second_letter' => 'N',
            'third_letter' => 'F',
            'fourth_letter' => 'P',
        ]);
        DB::table('mbtis')->insert([
            'name' => 'INTJ',
            'first_letter' => 'I',
            'second_letter' => 'N',
            'third_letter' => 'T',
            'fourth_letter' => 'J',
        ]);
        DB::table('mbtis')->insert([
            'name' => 'INTP',
            'first_letter' => 'I',
            'second_letter' => 'N',
            'third_letter' => 'T',
            'fourth_letter' => 'P',
        ]);
    }
}
