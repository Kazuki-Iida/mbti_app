import React, { useState, useEffect } from 'react';
import { Link, usePage , useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ParentCreate from './ParentCreate'; // ParentCreateコンポーネントをインポート
import LikeButton from '../Button/LikeButton';
import Menu from '../Common/Menu';
import FriendRequestButton from '../Button/FriendRequestButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function RequestList( props ) {
    const {auth, requests, mbtis} = props;
    console.log(requests);
    const handleApproval = async (requester) => {
      try {
        // API エンドポイントを呼び出し、承認を実行
        const response = await axios.post('/request/permit', { requester: requester });
    
        if (response.status === 200) {
          // 承認が成功した場合、ここで該当の requester を非表示にする処理を実行
          const requesterElement = document.getElementById(`requester-${requester.id}`);
          if (requesterElement) {
            requesterElement.style.display = 'none';
          }
        } else {
          console.log('繋がり申請の承認に失敗しました。');
        }
      } catch (error) {
        // alert('エラーが発生しました。繋がり申請の承認に失敗しました。');
        console.error(error);
      }
    };
    
    return (
        <>  
            <div className="w-[18%] bg-neutral-100 text-gray-900 p-10 fixed h-screen overflow-scroll border-r border-gray-300">
                <Link href="/"><h1 className="font-bold text-4xl">Pots<span className="text-xs block">animal conn(ll)ection</span></h1></Link>
                <div className="border-t border-gray-300 mt-5">
                <Link href={route('logout')} method="post" as="button">logout</Link>
                    <Link href="/profile" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src={auth.user.image_path}/>profile</Link>
                    <Link href="/friend/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/hand.png"/>friends</Link>
                    <Link href="/request/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/req.png"/>Requests</Link>
                </div>
                <div className="border-t border-gray-300 mt-5">
                    <Menu/>
                </div>
            </div>
            <div id="container" class="flex justify-between w-[82%] ml-[18%]">
                <div className="w-[52%] mt-14">
                    <div className="font-bold pl-10 text-2xl flex"><img className="w-[30px] h-[30px] mr-[20px]"src="/img/human.png"/><p>フレンド申請</p></div>
                    {requests.map((request) => (
                      <div className="mt-10 pl-10" key={request.request_user.id} id={`requester-${request.request_user.id}`}>
                        <div className="flex items-center bg-gray-100 border border-black p-5 rounded-md justify-between">
                          <div className="flex items-center">
                            <Link href={`/profile/user/${request.request_user.id}`}><img className="w-[60px] h-[60px] rounded-md mr-5" src={request.request_user.image_path} /></Link>
                            <div>
                              <p className="font-bold text-xl">{request.request_user.name}</p>
                              <span className="font-bold">
                                {mbtis.find((mbti) => mbti.id === request.request_user.mbti_id)?.name}
                              </span>
                            </div>
                            <div>
                              <p>{request.message}</p>
                            </div>
                          </div>
                          <button
                            className="bg-white flex items-center justify-between py-1 px-5 rounded-md font-bold"
                            onClick={() => handleApproval(request.request_user)}
                          >
                            <img className="w-[30px] h-[30px]" src="/img/hand.png" />
                            <p className="ml-5">承認</p>
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

export default RequestList;