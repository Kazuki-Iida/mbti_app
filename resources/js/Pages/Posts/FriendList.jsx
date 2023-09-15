import React, { useState, useEffect } from 'react';
import { Link, usePage , useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Menu from '../Common/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function FriendList( props ) {
    const {auth, friends, mbtis, talks} = props;
    
    const handleChat = (friendId) => {
    // 友達のIDを使用して該当するトークを探す処理を追加
    const talk = talks.find((talk) => talk.owner_id === friendId || talk.guest_id === friendId);

    if (talk) {
      // 該当するトークが見つかった場合、URLを直接設定してチャット画面に遷移
      window.location.href = `/chat/${talk.id}`;
    } else {
      // 該当するトークが見つからなかった場合のエラーメッセージ
      console.error('トークが見つかりませんでした。');
    }
  };
  console.log('friends',friends);
  friends.map((friend) => (
          console.log('friend_id',friend.mbti_id)
          ))
    
    return (
        <>  
        
            <div className="w-[18%] bg-neutral-100 text-gray-900 p-10 fixed h-screen overflow-scroll border-r border-gray-300">
                <Link href="/"><h1 className="font-bold text-4xl">Pots<span className="text-xs block">animal conn(ll)ection</span></h1></Link>
                <div className="border-t border-gray-300 mt-5">
                    <Link href="/profile" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src={auth.user.image_path}/>profile</Link>
                    <Link href="/friend/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/hand.png"/>friends</Link>
                    <Link href="/request/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/req.png"/>Requests</Link>
                </div>
                <div className="border-t border-gray-300 mt-5">
                    <Menu/>
                </div>
            </div>
            <div id="container" class="flex justify-between w-[82%] ml-[18%]">
                {/* <InfiniteScroll posts = { posts }/> */}
                <div className="w-[52%] mt-14">
                    <div className="font-bold pl-10 text-2xl flex"><img className="w-[30px] h-[30px] mr-[20px]"src="/img/human.png"/><p>フレンド一覧</p></div>
                    {friends.map((friend) => (
                      <div className="mt-10 pl-10" key={friend.id}>
                        <div className="flex items-center bg-gray-100 border border-black p-5 rounded-md justify-between">
                          <div className="flex items-center">
                            <Link href={`/profile/user/${friend.id}`}><img className="w-[60px] h-[60px] rounded-md mr-5" src={friend.image_path} /></Link>
                            <div>
                              <p className="font-bold text-xl">{friend.name}</p>
                              <span className="font-bold">
                                {mbtis.find((mbti) => mbti.id === friend.mbti_id)?.name}
                              </span>
                            </div>
                          </div>
                          <button
                            className="bg-white flex items-center justify-between py-1 px-5 rounded-md font-bold"
                            onClick={() => handleChat(friend.id)}
                          >
                            <img className="w-[30px] h-[30px]" src="/img/hand.png" />
                            <p className="ml-5">chat</p>
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="w-[39%] relative">
                     <div className="pot w-full h-[50%] bg-gray-900 absolute bottom-[20px] right-[20px]">
                     </div>
                </div>
            </div>
        </>
    );
}

export default FriendList;