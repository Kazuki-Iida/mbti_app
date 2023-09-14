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

function FriendList( props ) {
    const {auth} = props;
    return (
        <>  
            <div className="w-[18%] bg-neutral-100 text-gray-900 p-10 fixed h-screen overflow-scroll border-r border-gray-300">
                <h1 className="font-bold text-2xl"><Link href="/">MBTI APP<span className="text-xs block">あなたはどんな人？</span></Link></h1>
                <div className="border-t border-gray-300 mt-5">
                <Link href={route('logout')} method="post" as="button">logout</Link>
                    <Link href="" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src={auth.user.image_path}/>profile</Link>
                    <Link href="/friend/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/hand.png"/>friends</Link>
                    <Link href="/request/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/hand.png"/>Requests</Link>
                </div>
                <div className="border-t border-gray-300 mt-5">
                    <Menu/>
                </div>
            </div>
            <div id="container" class="flex justify-between w-[82%] ml-[18%]">
                {/* <InfiniteScroll posts = { posts }/> */}
                <div className="w-[52%] mt-14">
                        <div className="font-bold pl-10 text-2xl flex"><img className="w-[30px] h-[30px] mr-[20px]"src="/img/human.png"/><p>フレンド一覧</p></div>
                    
                    <div className="mt-10 pl-10">
                        <div className="flex items-center bg-gray-100 border border-black p-5 rounded-md justify-between">
                            <div className="flex items-center">
                                <img className="w-[60px] h-[60px] rounded-md mr-5" src="/img/sunrise.jpg" />
                                <div>
                                    <p className="font-bold text-xl">kaito kosuge</p>
                                    <span className="font-bold">intp</span>
                                </div>
                            </div>
                            <button className="bg-white flex items-center justify-between py-1 px-5 rounded-md font-bold"><img className="w-[30px] h-[30px]" src="/img/hand.png"/><p className="ml-5">承認</p></button>
                        </div>
                    </div>
                    <div className="mt-10 pl-10">
                        <div className="flex items-center bg-gray-100 border border-black p-5 rounded-md justify-between">
                            <div className="flex items-center">
                                <img className="w-[60px] h-[60px] rounded-md mr-5" src="/img/sunrise.jpg" />
                                <div>
                                    <p className="font-bold text-xl">kaito kosuge</p>
                                    <span className="font-bold">intp</span>
                                </div>
                            </div>
                            <button className="bg-white flex items-center justify-between py-1 px-5 rounded-md font-bold"><img className="w-[30px] h-[30px]" src="/img/hand.png"/><p className="ml-5">承認</p></button>
                        </div>
                    </div>
                    <div className="mt-10 pl-10">
                        <div className="flex items-center bg-gray-100 border border-black p-5 rounded-md justify-between">
                            <div className="flex items-center">
                                <img className="w-[60px] h-[60px] rounded-md mr-5" src="/img/sunrise.jpg" />
                                <div>
                                    <p className="font-bold text-xl">kaito kosuge</p>
                                    <span className="font-bold">intp</span>
                                </div>
                            </div>
                            <button className="bg-white flex items-center justify-between py-1 px-5 rounded-md font-bold"><img className="w-[30px] h-[30px]" src="/img/hand.png"/><p className="ml-5">承認</p></button>
                        </div>
                    </div>
                    <div className="mt-10 pl-10">
                        <div className="flex items-center bg-gray-100 border border-black p-5 rounded-md justify-between">
                            <div className="flex items-center">
                                <img className="w-[60px] h-[60px] rounded-md mr-5" src="/img/sunrise.jpg" />
                                <div>
                                    <p className="font-bold text-xl">kaito kosuge</p>
                                    <span className="font-bold">intp</span>
                                </div>
                            </div>
                            <button className="bg-white flex items-center justify-between py-1 px-5 rounded-md font-bold"><img className="w-[30px] h-[30px]" src="/img/hand.png"/><p className="ml-5">承認</p></button>
                        </div>
                    </div>
                    <div className="mt-10 pl-10">
                        <div className="flex items-center bg-gray-100 border border-black p-5 rounded-md justify-between">
                            <div className="flex items-center">
                                <img className="w-[60px] h-[60px] rounded-md mr-5" src="/img/sunrise.jpg" />
                                <div>
                                    <p className="font-bold text-xl">kaito kosuge</p>
                                    <span className="font-bold">intp</span>
                                </div>
                            </div>
                            <button className="bg-white flex items-center justify-between py-1 px-5 rounded-md font-bold"><img className="w-[30px] h-[30px]" src="/img/hand.png"/><p className="ml-5">承認</p></button>
                        </div>
                    </div>
                    <div className="mt-10 pl-10">
                        <div className="flex items-center bg-gray-100 border border-black p-5 rounded-md justify-between">
                            <div className="flex items-center">
                                <img className="w-[60px] h-[60px] rounded-md mr-5" src="/img/sunrise.jpg" />
                                <div>
                                    <p className="font-bold text-xl">kaito kosuge</p>
                                    <span className="font-bold">intp</span>
                                </div>
                            </div>
                            <button className="bg-white flex items-center justify-between py-1 px-5 rounded-md font-bold"><img className="w-[30px] h-[30px]" src="/img/hand.png"/><p className="ml-5">承認</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FriendList;