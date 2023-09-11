import React, { useState, useEffect } from 'react';
import { Link, usePage , useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Menu from "../Common/Menu";
import ParentCreate from './ParentCreate'; // ParentCreateコンポーネントをインポート

//import { FollowButton } from "../Button/FollowButton";
//import InfiniteScroll from "react-infinite-scroller"

function Index( props ) {
    console.log( props );
    const { posts ,user} = props;
    return (
        <>  
        <div className="fixed z-10 flex items-center left-[18%] p-[12px] bg-neutral-100 w-full border-b border-gray-300">
            <p className="font-bold text-xl mr-5">home</p>
            <input type="text" placeholder = "🔎検索"className="bg-neutral-100 block rounded-md w-[70%] border-gray-300 focus:ring-0"/>
        </div>
            <div className="w-[18%] bg-neutral-100 text-gray-900 p-10 fixed h-screen overflow-scroll border-r border-gray-300">
                <h1 className="font-bold text-2xl">MBTI APP<span className="text-xs block">あなたはどんな人？</span></h1>
                <div className="border-t border-gray-300 mt-5">
                    <a href="" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="img/pen.png"/>profile</a>
                    <a href="" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="img/hand.png"/>friends</a>
                </div>
                <div className="border-t border-gray-300 mt-5">
                    <Menu/>
                </div>
            </div>
            <div class="flex justify-between w-[82%] ml-[18%]">
                {/* <InfiniteScroll posts = { posts }/> */}
                <div className="w-[52%] mt-14">
                { posts.map(( post ) => (
                        <div key={post.id} className="border-t border-gray-300 text-gray-900  py-10 px-10 w-[100%] mt-1">
                            <Link href={`/posts/${post.id}`}>
                                <div class="flex justify-between items-center">
                                    <p className="text-xl font-bold flex items-center object-cover"><img src="img/sunrise.jpg" className="element w-[40px] h-[40px] mr-5" /><div>{post.user.name}<span className="ml-5 text-xs font-medium text-gray-500">{post.created_at}</span><span className="block text-xs"> {post.user.mbti.name}</span></div></p>
                                    <button className="font-bold flex rounded-md border border-gray-400 p-1"><img src="img/hand.png" className="w-[25px] mr-1"/>friend request</button>
                                </div>
                                <p className="text-md break-words mt-10 leading-8 tracking-tight">{post.id}{post.body}</p>
                                <div className="grid gap-5 grid-cols-2 w-full mt-5">
                                {post.images && post.images.map((image, index) => ( //実際の写真を表示する用)
                                <div className="">
                                    <img
                                        key={index}
                                        className="w-full rounded-xl block"
                                        src={image.image_path}
                                        alt={`Image ${index}`}
                                    />
                                </div>
                                ))} 
                                </div>
                                <div className="mt-5 flex">
                                    <a href="" className="flex items-center text-sm"><img src="img/comment.png" className="w-[20px] mr-[10px]"/>20</a>
                                    <a href="" className="ml-10 flex items-center text-sm"><img src="img/heart.png" className="w-[20px] mr-[10px]"/>20</a>
                                </div>
                            </Link>
                        </div>
                ))}
                </div>
               
                    <ParentCreate /> {/* ParentCreateコンポーネントを配置 */}
                

            </div>
        </>
    );
}

export default Index;