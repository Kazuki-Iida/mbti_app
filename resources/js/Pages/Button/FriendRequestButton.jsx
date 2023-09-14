import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from '@inertiajs/react';

function FriendRequestButton({ permitterId, postId, onRequestComplete }) {
  const { data, setData } = useForm({
    message: '',
    permitter_id: permitterId,
    post_id: postId,
  });

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
    

    try {
      const response = await axios.post('/friend/request', data, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrf_token,
        },
      });

      if (response.status === 200) {
        console.log('フレンドリクエストが送信されました。');
        onRequestComplete(true);
        
        // 申請成功時にバナーを表示
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
            value={data.message}
            onChange={(e) => setData('message', e.target.value)}
            required
          />
        </div>
        <button type="submit">リクエストを送信</button>
      </form>

      
    </div>
  );
}

export default FriendRequestButton;