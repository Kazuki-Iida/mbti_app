import React, { useState, useEffect } from 'react';
import { Link, usePage , useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Menu from "../Common/Menu";
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
                                <img className="mt-5 w-full rounded-xl"src="https://eiga.k-img.com/images/buzz/51968/main_large.jpg"/>
                                <div className="mt-5 flex">
                                    <a href="" className="flex items-center text-sm"><img src="img/comment.png" className="w-[20px] mr-[10px]"/>20</a>
                                    <a href="" className="ml-10 flex items-center text-sm"><img src="img/heart.png" className="w-[20px] mr-[10px]"/>20</a>
                                </div>
                            </Link>
                        </div>
                ))}
                </div>
                <div className="w-[39%] bg-neutral-100 p-10 border-l border-gray-300 fixed right-0 z-0 h-screen">
                   <Link href="/posts/parent/create">投稿作成</Link>

                    <div className="mt-20 flex items-center"><img src="img/pen.png" className="w-[35px] mr-1"/><img src="img/post.png" className="w-[20px] mr-1"/><p className="font-bold">投稿する</p></div>
                    <textarea placeholder="投稿する"className="w-full h-[150px] mt-5 border-none focus:ring-0 bg-neutral-100 rounded-md"/>
                    <div className="flex justify-between items-center border-t border-gray-300 py-5">
                        <label for="form-image" className="cursor-pointer px-5 block font-bold text-sm"><img src="img/image.png" class="w-[25px]"/>img</label>
                        <input type="file" id="form-image"/>
                        <button className="flex items-center border border-gray-400 p-1 rounded-md"><img src="img/post.png"className="w-[20px] mr-1" /><p className="font-bold">送信</p></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;