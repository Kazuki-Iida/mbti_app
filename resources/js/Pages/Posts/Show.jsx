import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from '@inertiajs/react';
import { useState } from "react";
//import { FollowButton } from "../Button/FollowButton";
//import InfiniteScroll from "react-infinite-scroller"

function Show( props ) {
    console.log( props );
    const { post } = props;
    return (
        <>
        <div className="fixed flex items-center left-[18%] p-[12px] bg-neutral-100 w-full border-b border-gray-300">
            <p className="font-bold text-xl mr-5">home</p>
            <input type="text" placeholder = "🔎検索"className="bg-neutral-100 block rounded-md w-[70%] border-gray-300 focus:ring-0"/>
        </div>
            <div className="w-[18%] bg-neutral-100 text-gray-900 p-10 fixed h-screen overflow-scroll border-r border-gray-300">
                <h1 className="font-bold text-2xl">MBTI APP<span className="text-xs block">あなたはどんな人？</span></h1>
                <div className="border-t border-gray-300 mt-5">
                    <a href="" className="flex font-bold mt-5 items-center"><img className="w-[35px] mr-5"src="img/pen.png"/>profile</a>
                    <a href="" className="flex font-bold mt-5 items-center"><img className="w-[35px] mr-5"src="img/hand.png"/>friends</a>
                </div>
                    <div class="border-t border-gray-300 mt-5">
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/tora.png" className="w-[25px] mr-5"/><p>INTJ</p></a></div>
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/hukuro.png"className="w-[25px] mr-5"/><p>INTP</p></a></div>
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/lion.png"className="w-[25px] mr-5"/><p>ENTJ</p></a></div>
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/oumu.png"className="w-[25px] mr-5"/><p>ENTP</p></a></div>
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/kirin.png"className="w-[25px] mr-5"/><p>INFJ</p></a></div>
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/usagi.png"className="w-[25px] mr-5"/><p>INFP</p></a></div>
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/dog.png"className="w-[25px] mr-5"/><p>ENFJ</p></a></div>
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/zou.png"className="w-[25px] mr-5"/><p>ENFP</p></a></div>
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/kaba.png"className="w-[25px] mr-5"/><p>ISTJ</p></a></div>
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/sika.png"className="w-[25px] mr-5"/><p>ISFJ</p></a></div>
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/kuma.png"className="w-[25px] mr-5"/><p>ESTJ</p></a></div>
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/uma.png"className="w-[25px] mr-5"/><p>ESFJ</p></a></div>
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/cat.png"className="w-[25px] mr-5"/><p>ISTP</p></a></div>
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/hituji.png"className="w-[25px] mr-5"/><p>ISFP</p></a></div>
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/simauma.png"className="w-[25px] mr-5"/><p>ESTP</p></a></div>
                        <div className="mt-5 font-bold text-md w-[45%] p-1"><a href="" className="flex"><img src="img/usi.png"className="w-[25px] mr-5"/><p>ESFP</p></a></div>
                    </div>
                </div>
            <div class="flex justify-between w-[82%] ml-[18%]">
                {/* <InfiniteScroll posts = { posts }/> */}
                <div className="w-[52%] mt-14">
               
                </div>
                <div className="w-[48%] bg-neutral-100 p-10 border-l border-gray-300">
                    <div className="mt-20 flex items-center"><img src="img/pen.png" className="w-[35px] mr-1"/><img src="img/post.png" className="w-[20px] mr-1"/><p className="font-bold">投稿する</p></div>
                    <textarea placeholder="今日は何があったか言ってみい？？"className="w-full h-[150px] mt-5 border-none focus:ring-0 bg-neutral-100 rounded-md"/>
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

export default Show;