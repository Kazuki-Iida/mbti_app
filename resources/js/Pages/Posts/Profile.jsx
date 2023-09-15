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
function Profile( props ) {
    
    const { auth } = props;
    return(
        
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
                    <div className="font-bold pl-10 text-2xl flex"><img className="w-[30px] h-[30px] mr-[20px]"src="/img/human.png"/><p>プロフィール</p></div>
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                            <div className="p-8">
                                <div className="max-w-xl"/>
                                    <div className="cursor-pointer px-5 block font-bold text-sm">
                                        <div className="w-[300px] mx-auto">
                                            <div className="w-full">
                                                <img
                                                    src="../img/pen.png"
                                                    alt="Profile Image Image Preview"
                                                    className="w-full rounded-xl"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-8">
                                <p className="block p-5 w-full rounded-md font-bold text-4xl">ユーザ名</p>
                            </div>
                            <div className="px-8">
                                <p className="block p-5 w-full rounded-md font-bold text-4xl">mbti</p>
                            </div>
                            <div className="px-8">
                                <p className="block p-5 w-full rounded-md font-bold text-xl">email</p>
                            </div>
                        </div>
                    </div>
                <div className="w-[39%] relative">
                     <div className="pot w-full h-[50%] bg-gray-900 absolute bottom-[20px] right-[20px]">
                     </div>
                </div>
            </div>
        </>      
        
        );
    }
export default Profile;