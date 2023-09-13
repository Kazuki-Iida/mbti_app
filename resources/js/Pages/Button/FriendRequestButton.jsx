import React, { useState } from 'react';
import axios from 'axios'; // axiosをインポート

function FriendRequestButton({ permitter_id, post_id }) {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
    // メッセージと permitter_id を含むリクエストデータを作成
    const requestData = {
      message,
      permitter_id,
      post_id
    };

    try {
      // axiosを使用してサーバーにリクエストを送信
      const response = await axios.post(`/friend/request`, requestData, {
        headers: {
          'Content-Type': 'application/json',
          // X-CSRF-TOKENを追加する場合（LaravelのCSRF保護が有効な場合）
           'X-CSRF-TOKEN': csrf_token,
        },
      });

      if (response.status === 200) {
        console.log('フレンドリクエストが送信されました。');
      } else {
        console.error('フレンドリクエストの送信に失敗しました。');
      }
    } catch (error) {
      console.error('エラーが発生しました: ', error);
    }
    console.log('リクエストデータ:', requestData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="message">メッセージ:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">リクエストを送信</button>
      </form>
    </div>
  );
}

export default FriendRequestButton;
