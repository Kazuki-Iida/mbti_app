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
            'name' => '飯田かずき',
            'email' => 'ryojikan@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 1,
            'introduction' => 'ESFJで領事官型の飯田です！よろしくお願いします。',
            'image_path' => "https://ballers-design.com/ballers-design/wp-content/uploads/2021/09/craig-philbrick-HuHGLn21fM0-unsplash-scaled-1-1-960x960.jpg",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => 'Kane',
            'email' => 'kana@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 1,
            'introduction' => '05/ljk',
            'image_path' => "https://pbs.twimg.com/media/FSTOFVnaIAEDDNs?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => 'みすず',
            'email' => 'miss@gmail.com',
            'password' => Hash::make('undouka'),
            'mbti_id' => 2,
            'introduction' => '人を楽しませたい！',
            'image_path' => "https://pbs.twimg.com/media/FY1oxq6aAAQAfmQ?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => 'あや',
            'email' => 'aya@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 2,
            'introduction' => 'ウエディングプランナー/カフェ巡り',
            'image_path' => "https://pbs.twimg.com/media/F5bSnNSa8AEouKk?format=jpg&name=medium",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '小杉',
            'email' => 'kosugi@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 3,
            'introduction' => 'プロジェクトマネージャー',
            'image_path' => "https://d-laboblog.com/wp-content/uploads/2021/06/f85f9485477cea20726041c3f29e3e92.jpg",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => 'リンク',
            'email' => 'rink@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 3,
            'introduction' => '葛尾高校出身/宮城',
            'image_path' => "https://pbs.twimg.com/media/FWaxxyUaIAALY9H?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => 'はやと',
            'email' => 'hayato@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 4,
            'introduction' => '趣味:海外旅行✈',
            'image_path' => "https://pbs.twimg.com/media/EHDEblaUUAAEzSo?format=jpg&name=medium",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '米村直樹',
            'email' => 'yonemura@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 4,
            'introduction' => '起業家/三社経営',
            'image_path' => "https://pbs.twimg.com/media/DMn6olMUMAAifyb?format=png&name=small",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => 'kanesuke',
            'email' => 'kanesuke@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 5,
            'introduction' => '某中学校教員',
            'image_path' => "https://pbs.twimg.com/media/F5gJ7xjaoAAODeK?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '人事ちゃん',
            'email' => 'zinzi@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 5,
            'introduction' => '社会人2年目の限界人事',
            'image_path' => "https://pbs.twimg.com/media/F6Dz0nqaEAA5G7c?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
         DB::table('users')->insert([
            'name' => '篠崎陽斗',
            'email' => 'undouka@gmail.com',
            'password' => Hash::make('undouka'),
            'mbti_id' => 6,
            'introduction' => 'ENFPで広報運動家型の篠崎です！よろしくお願いします。',
            'image_path' => "https://pbs.twimg.com/media/Eg0kW3nU8AAd79q?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => 'カワムラ君',
            'email' => 'kawamura@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 6,
            'introduction' => 'コメディアン',
            'image_path' => "https://pbs.twimg.com/media/F53_k-jacAARxln?format=jpg&name=medium",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '医療従事者',
            'email' => 'iryo@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 7,
            'introduction' => '都内大学病院勤務',
            'image_path' => "https://pbs.twimg.com/media/Eg0kW3nU8AIJyqn?format=jpg&name=medium",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => 'メイクイン',
            'email' => 'meikuin@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 7,
            'introduction' => 'じゃがいも大好き',
            'image_path' => "https://pbs.twimg.com/media/FlO5AwdakAE4xfG?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => 'コスモ',
            'email' => 'kosumo@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 8,
            'introduction' => 'Three.js勉強中',
            'image_path' => "https://pbs.twimg.com/media/Di4Tqj8XgAEvYxm?format=jpg&name=medium",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '茂木凛',
            'email' => 'motegi@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 8,
            'introduction' => 'フリーランスエンジニア',
            'image_path' => "https://pbs.twimg.com/media/EMjKQjlUUAAJODq?format=jpg&name=small",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => 'ユウグン',
            'email' => 'yugun@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 9,
            'introduction' => '大学教員/猫好き',
            'image_path' => "https://pbs.twimg.com/media/FPZ3GSbUcAA30Lf?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '林田啓介',
            'email' => 'hayashi@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 9,
            'introduction' => 'フリーランスエンジニア',
            'image_path' => "https://pbs.twimg.com/media/F2bnEaCasAE9pHu?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => 'ジェフ',
            'email' => 'jf@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 10,
            'introduction' => 'イタリアンシェフ',
            'image_path' => "https://pbs.twimg.com/media/EYA3JWvX0AAajM3?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '米津健氏',
            'email' => 'yonetu@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 10,
            'introduction' => 'Jpopアーティスト',
            'image_path' => "https://pbs.twimg.com/media/Fki0Ox5UUAEqbIq?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '公認会計士',
            'email' => 'kaikei@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 11,
            'introduction' => '簿記の勉強法教えます！',
            'image_path' => "https://pbs.twimg.com/media/F4FRR2ebkAMdtkZ?format=jpg&name=medium",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '鈴木卓',
            'email' => 'suzuki@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 11,
            'introduction' => '無印がすきです。',
            'image_path' => "https://pbs.twimg.com/media/FJGyFtvVkAIQb9g?format=jpg&name=900x900",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => 'comoli',
            'email' => 'comoli@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 12,
            'introduction' => 'ファッションデザイナー',
            'image_path' => "https://pbs.twimg.com/media/ESqJ34EXsAIaqlR?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => 'プログラマ',
            'email' => 'program@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 12,
            'introduction' => 'Web系エンジニアです',
            'image_path' => "https://pbs.twimg.com/media/EjZLBgGU0AAUIc_?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        
        DB::table('users')->insert([
            'name' => 'シクラメン',
            'email' => 'shikura@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 13,
            'introduction' => '空間心理学専攻',
            'image_path' => "https://pbs.twimg.com/media/E0jryhzUYAAP2AN?format=jpg&name=medium",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => 'やまと',
            'email' => 'yamato@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 13,
            'introduction' => '大学2年',
            'image_path' => "https://pbs.twimg.com/media/FdNb-CPaIAEpuvy?format=jpg&name=medium",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '遥',
            'email' => 'haruka@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 14,
            'introduction' => '友達大好き',
            'image_path' => "https://pbs.twimg.com/media/FDeqVw8acAAP5G4?format=jpg&name=small",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '旅ブロガー',
            'email' => 'blog@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 14,
            'introduction' => '趣味は旅日記をあげること。',
            'image_path' => "https://pbs.twimg.com/media/D7UvCPqXoAA5uPY?format=jpg&name=small",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '映画監督',
            'email' => 'kantoku@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 15,
            'introduction' => '映画作り',
            'image_path' => "https://pbs.twimg.com/media/FSTOFVgakAETsQc?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => 'かずま',
            'email' => 'kazuma@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 15,
            'introduction' => '写真撮り行きたい',
            'image_path' => "https://pbs.twimg.com/media/E3tiueCVIAEj5vi?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '佐々木悠馬',
            'email' => 'kosum@gmail.com',
            'password' => Hash::make('ryojikan'),
            'mbti_id' => 16,
            'introduction' => 'インターネットが友達',
            'image_path' => "https://pbs.twimg.com/media/EzGKio1VIAkTIDG?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        DB::table('users')->insert([
            'name' => '論理学者',
            'email' => 'ronrigakusya@gmail.com',
            'password' => Hash::make('ronrigakusya'),
            'mbti_id' => 16,
            'introduction' => 'INTPで論理学者型の小菅です！よろしくお願いします。',
            'image_path' => "https://pbs.twimg.com/media/F5_RRjQa8AAM6Mw?format=jpg&name=large",
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        
    }
}