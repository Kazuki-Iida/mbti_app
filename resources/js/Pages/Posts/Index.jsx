import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
//import { FollowButton } from "../Button/FollowButton";
//import InfiniteScroll from "react-infinite-scroller"

function Index( props ) {
    console.log( props );
    const { posts ,user} = props;

    const [list, setList] = useState([]);          //表示するデータ
    // const [hasMore, setHasMore] = useState(true);  //再読み込み判定

    // const loader =<div className="loader" key={0}>Loading ...</div>;
    // const loadMore = async (page) => {
      
    //     const response = await fetch(`http://localhost:3000/api/test?page=${page}`);  //API通信
    //     const data = await response.json();  //取得データ
  
    //     //データ件数が0件の場合、処理終了
    //     if (data.length < 1) {
    //       setHasMore(false);
    //       return;
    //     }
    //     //取得データをリストに追加
    //     setList([...list, ...data])
    //   }
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
                { posts.map(( post ) => (
                        <div key={post.id} className="border-t border-gray-300 text-gray-900  py-5 px-10 w-[100%] mt-1">
                            <Link href={`/posts/${post.id}`}>
                                <div class="flex justify-between items-center">
                                    <p className="text-xl font-bold flex items-center object-cover"><img src="img/sunrise.jpg" className="element w-[40px] h-[40px] mr-5" /><div>{post.user.name}<span className="ml-5 text-xs font-medium text-gray-500">{post.created_at}</span><span className="block text-xs">intp</span></div></p>
                                    <button className="font-bold flex rounded-md border border-gray-400 p-1"><img src="img/hand.png" className="w-[25px] mr-1"/>friend request</button>
                                </div>
                                <p className="text-md break-words mt-10 leading-8 tracking-tight">{post.id}{post.body}</p>
                                <img className="mt-5 w-full rounded-xl"src="https://assets.st-note.com/production/uploads/images/52423220/rectangle_large_type_2_3b3d0d397bf5d630997f1b7534936d91.jpeg?width=2000&height=2000&fit=bounds&quality=85" />
                                <div className="mt-5 flex">
                                    <a href="" className="flex items-center text-sm"><img src="img/comment.png" className="w-[20px] mr-[10px]"/>20</a>
                                    <a href="" className="ml-10 flex items-center text-sm"><img src="img/heart.png" className="w-[20px] mr-[10px]"/>20</a>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="w-[48%] bg-neutral-100 p-10 border-l border-gray-300">
                   <Link href="/posts/parent/create">投稿作成</Link>

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

export default Index;