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
            'body' => '#ハッカソン #日本 ハッカソン充実しすぎた。',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        
        
        DB::table('posts')->insert([
            'user_id' => 2,
            'parent_post_id' => null,
            'body' => '友達大好き',
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
            'user_id' => 2,
            'parent_post_id' => null,
            'body' => '自分を強く持ちたい。',
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
            'body' => '#日本代表 スゲー',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 5,
            'parent_post_id' => null,
            'body' => '伝統を重んじるタイプ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 6,
            'parent_post_id' => null,
            'body' => 'リーダー的立ち回りが多いな',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 5,
            'parent_post_id' => null,
            'body' => '恋愛はちょっと苦手',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 7,
            'parent_post_id' => null,
            'body' => '人生は冒険！！',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 8,
            'parent_post_id' => null,
            'body' => '起業する人が多いよ！',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 7,
            'parent_post_id' => null,
            'body' => '面白いアプリ作りたいなー',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 9,
            'parent_post_id' => null,
            'body' => '#日本 日本代表面白すぎる',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 10,
            'parent_post_id' => null,
            'body' => '変化に強いよ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 9,
            'parent_post_id' => null,
            'body' => 'フレキシブルな生活が好き',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        
        DB::table('posts')->insert([
            'user_id' => 12,
            'parent_post_id' => null,
            'body' => '一人暮らししたい',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 11,
            'parent_post_id' => null,
            'body' => '計画立てるのはちょっと苦手',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 13,
            'parent_post_id' => null,
            'body' => '一番外交的かも',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 14,
            'parent_post_id' => null,
            'body' => '計画立てるの得意！',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 13,
            'parent_post_id' => null,
            'body' => 'チームで作業したいタイプ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 15,
            'parent_post_id' => null,
            'body' => '好奇心旺盛なタイプ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 16,
            'parent_post_id' => null,
            'body' => 'アドバイスを素直に受け入れられる',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 15,
            'parent_post_id' => null,
            'body' => '独創的とは私のこと',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 17,
            'parent_post_id' => null,
            'body' => 'ちょっと繊細かも',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 18,
            'parent_post_id' => null,
            'body' => '優しいから頼られがち',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 17,
            'parent_post_id' => null,
            'body' => '心が広いよ！',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 19,
            'parent_post_id' => null,
            'body' => '自由に仕事したい。',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 20,
            'parent_post_id' => null,
            'body' => 'アーティストが多いな',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 19,
            'parent_post_id' => null,
            'body' => 'クリエイト思考',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 21,
            'parent_post_id' => null,
            'body' => 'いつでも冷静',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 22,
            'parent_post_id' => null,
            'body' => '慌てないのが大事。',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 23,
            'parent_post_id' => null,
            'body' => '#ハッカソン ハッカソン楽しそう。',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 24,
            'parent_post_id' => null,
            'body' => '長期的に頑張るのはちょっと苦手だな。短期集中型！',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 23,
            'parent_post_id' => null,
            'body' => '落ち着いてるってよく言われる',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 25,
            'parent_post_id' => null,
            'body' => '勤勉で実務的な人が多い',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 26,
            'parent_post_id' => null,
            'body' => '責任が強いから、人の誕生日は忘れたことないな',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 25,
            'parent_post_id' => null,
            'body' => '繊細だから傷つきやすいよ、、、',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 27,
            'parent_post_id' => null,
            'body' => '何事も直観だよね',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 28,
            'parent_post_id' => null,
            'body' => '事実よりアイデアが大事',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 27,
            'parent_post_id' => null,
            'body' => '想像力には自信ある。',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 29,
            'parent_post_id' => null,
            'body' => '普段控えめだけど、実は考え持ってる。',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        
        DB::table('posts')->insert([
            'user_id' => 29,
            'parent_post_id' => null,
            'body' => '自己啓発と知識が自分を強くする。',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 31,
            'parent_post_id' => null,
            'body' => '変わっているとよく言われる。',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 32,
            'parent_post_id' => null,
            'body' => '想像力と思考力に自信があります',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 31,
            'parent_post_id' => null,
            'body' => '常識は苦手',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        
        DB::table('posts')->insert([
            'user_id' => 30,
            'parent_post_id' => null,
            'body' => '論理的思考力が高い。',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 2,
            'parent_post_id' => null,
            'body' => '#日本 がんばれニッポン！！',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 11,
            'parent_post_id' => null,
            'body' => 'コミュニケーション能力が高い人が多いね',
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
            'user_id' => 11,
            'parent_post_id' => 1,
            'body' => 'それなー！',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
         DB::table('posts')->insert([
            'user_id' => 15,
            'parent_post_id' => 1,
            'body' => 'わかります！',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 17,
            'parent_post_id' => 2,
            'body' => 'いいですね！',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 31,
            'parent_post_id' => 4,
            'body' => '性格良すぎます。',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('posts')->insert([
            'user_id' => 25,
            'parent_post_id' => 4,
            'body' => '気分いいですよね。',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
    }
}
