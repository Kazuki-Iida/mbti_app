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
    <div className="relative">
      <form onSubmit={handleSubmit} class="absolute z-10 top-[0px] right-[0px] bg-black mt-5 rounded-md p-5">
        <div>
          <label htmlFor="message" className="text-white font-bold text-xs block">メッセージ</label>
          <textarea
            id="message"
            value={data.message}
            onChange={(e) => setData('message', e.target.value)}
            className="rounded-md w-[400px] block mt-1"
            required
          />
        </div>
        <button type="submit" className="bg-gray-100 flex items-center mt-5 border border-black px-5 py-1 rounded-md font-bold text-sm"><img src="../img/hand.png" className="mr-1 w-[25px] mr-1" />リクエストする</button>
      </form>

      
    </div>
  );
}

export default FriendRequestButton;