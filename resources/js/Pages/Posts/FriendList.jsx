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
    useEffect(() => {
  // 複数の要素のdata-img属性値とクラス名の対応を定義
          const imgClasses = {
            1: 'img1',
            2: 'img2',
            3: 'img3',
            4: 'img4',
            5: 'img5',
            6: 'img6',
            7: 'img7',
            8: 'img8',
            9: 'img9',
            10: 'img10',
            11: 'img11',
            12: 'img12',
            13: 'img13',
            14: 'img14',
            15: 'img15',
            16: 'img16',
          };
        
          // data-img属性値を持つ要素に対して処理を行う
          Object.entries(imgClasses).forEach(([dataAttr, className]) => {
            const img = document.querySelector(`[data-img="${dataAttr}"]`);
            const btn = document.querySelector('.friendBtn');
            btn.addEventListener('click', () => {
                btn.classList.add('hidden');
              img.classList.add(className);
              console.log('done');
            });
          });
        }, []);
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
                     <button className="block friendBtn font-bold absolute top-[20%] border border-black p-5 rounded-md">show my friends</button>
                     <div className="pot w-full h-[50%] bg-gray-900 absolute bottom-[20px] right-[20px]">
                </div>
                     <div id="animal-id">
                    <img data-img="1"className="w-[80px] h-[80px]" id="img1" src="../img/uma.png" />
                    <img data-img="2"className="w-[80px] h-[80px]"id="img2" src="../img/usi.png" />
                    <img data-img="3"className="w-[80px] h-[80px]"id="img3" src="../img/kuma.png" />
                    <img data-img="4"className="w-[80px] h-[80px]"id="img4" src="../img/simauma.png"/>
                    <img data-img="5"className="w-[80px] h-[80px]"id="img5" src="../img/dog.png" />
                    <img data-img="6"className="w-[80px] h-[80px]"id="img6" src="../img/zou.png" />
                    <img data-img="7"className="w-[80px] h-[80px]"id="img7" src="../img/lion.png" />
                    <img data-img="8"className="w-[80px] h-[80px]"id="img8" src="../img/oumu.png" />
                    <img data-img="9"className="w-[80px] h-[80px]"id="img9" src="../img/sika.png" />
                    <img data-img="10"className="w-[80px] h-[80px]"id="img10" src="../img/hituji.png" />
                    <img data-img="11"className="w-[80px] h-[80px]"id="img11" src="../img/kaba.png" />
                    <img data-img="12"className="w-[80px] h-[80px]"id="img12" src="../img/cat.png" />
                    <img data-img="13"className="w-[80px] h-[80px]"id="img13" src="../img/kirin.png" />
                    <img data-img="14"className="w-[80px] h-[80px]"id="img14" src="../img/usagi.png" />
                    <img data-img="15"className="w-[80px] h-[80px]"id="img15" src="../img/tora.png" />
                    <img data-img="16"className="w-[80px] h-[80px]"id="img16" src="../img/hukuro.png" />
                </div>
                </div>
            </div>
        </>
    );
}

export default FriendList;