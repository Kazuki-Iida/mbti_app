import React from 'react';
import axios from 'axios'; // axiosをインポート
import { useForm } from '@inertiajs/react';

function FriendRequestButton({ permitterId, postId, onRequestComplete }) {
  const { data, setData } = useForm({
    message: '', // 初期値を設定
    permitter_id: permitterId,
    post_id: postId,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;

    console.log('fetch リクエスト:', {
      url: '/friend/request', // リクエストURL
      method: 'POST', // HTTPメソッド
      data: data, // 送信データ
      headers: {
        'Content-Type': 'application/json', // リクエストヘッダー
        'X-CSRF-TOKEN': csrf_token, // CSRFトークン（必要な場合）
      },
    });

    try {
      // axiosを使用してサーバーにリクエストを送信
      const response = await axios.post('/friend/request', data);

      if (response.status === 200) {
        console.log('フレンドリクエストが送信されました。');
        onRequestComplete(true);
      } else {
        console.error('フレンドリクエストの送信に失敗しました。');
        onRequestComplete(false);
      }
    } catch (error) {
      console.error('エラーが発生しました: ', error);
      onRequestComplete(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="message">メッセージ:</label>
          <textarea
            id="message"
            value={data.message} // データを表示
            onChange={(e) => setData('message', e.target.value)} // データを更新
            required
          />
        </div>
        <button type="submit">リクエストを送信</button>
      </form>
    </div>
  );
}

export default FriendRequestButton;
