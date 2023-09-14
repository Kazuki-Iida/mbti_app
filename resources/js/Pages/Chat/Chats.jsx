import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ChatMessages from '@/Components/Chat/ChatMessages';
import ChatForm from '@/Components/Chat/ChatForm';
//import { Head } from '@inertiajs/react';

export default function Chats({ auth, errors ,talkId}) {
    // console.log(talkId);
    const user = auth.user;
    const [messages, setMessages] = useState([]);
    console.log('messages',messages);
    // メッセージをバックエンドに送信
    const sendMessage = useCallback(async (message) => {
        await axios.post(route('chat.store'), { user:user,message: message,user_id: user.id,talk_id:talkId ,userName:user.name});
        setMessages(prevState => ([ ...prevState, { user:user,message:message, user_id: user.id,talk_id:talkId ,userName:user.name}]));
    });

    // チャットメッセージを取得する
    const getChatMessages = async () => {
        //const res = await axios.get(route('chat.fetch'));
        const res = await axios.get(`/messages/${talkId}`);
        console.log('res',res);
        setMessages(res.data);
    };

    useEffect(() => {
        getChatMessages();
        // ブロードキャスト受信
        window.Echo
            .private('chat')  // 作成したイベントのチャンネル名と合わせる
            .listen('MessageSent', (e) => {  // 第一引数はイベントのクラス名
            getChatMessages(); // ブロードキャスト通知が来たら再読込みする
            });
    }, []);

    return (
            <div className="py-12 h-[600px]">
                <div className="mx-[8%] bg-white h-full overflow-y-scroll p-3">
                    <ChatMessages messages={messages} talkId={talkId} user={user} userName={user.name}/>
                </div>
                <div className="mx-[8%] bg-white border-t-2">
                    <ChatForm user={user} sendMessage={sendMessage} />
                </div>
            </div>
       
    );
}