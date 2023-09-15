import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ChatMessages from '@/Components/Chat/ChatMessages';
import ChatForm from '@/Components/Chat/ChatForm';
import Menu from '../Common/Menu';
import { Link, usePage , useForm } from '@inertiajs/react';
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
            <>
            <div className="w-[18%] bg-neutral-100 text-gray-900 p-10 fixed h-screen overflow-scroll border-r border-gray-300">
                <Link href="/"><h1 className="font-bold text-4xl">Pots<span className="text-xs block">animal conn(ll)ection</span></h1></Link>
                <div className="border-t border-gray-300 mt-5">
                    <Link href="/profile" className="flex font-bold mt-5 items-center ml-5 rouded-md"><img className="w-[35px] mr-5  block" src={auth.user.image_path}/>profile</Link>
                    <Link href="/friend/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/hand.png"/>friends</Link>
                    <Link href="/request/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/req.png"/>Requests</Link>
                </div>
                <div className="border-t border-gray-300 mt-5">
                    <Menu/>
                </div>
            </div>
            <div id="container" class="flex justify-between w-[82%] ml-[18%]">
                <div className="w-[100%] mt-5">
                    <div className="font-bold pl-10 pb-5 text-2xl flex"><img className="w-[30px] h-[30px] mr-[20px]"src="/img/human.png"/><p>Chat</p></div>
                    <div className="h-[600px] border-t border-gray-300">
                        <div className="mx-[3%] h-full overflow-y-scroll p-3">
                            <ChatMessages auth={user}messages={messages} talkId={talkId} user={user} userName={user.name}/>
                        </div>
                        <div className="mx-[3%] h-[100px]">
                            <ChatForm user={user} sendMessage={sendMessage} />
                        </div>
                    </div>
                </div>
               
            </div>
        </>
       
    );
}