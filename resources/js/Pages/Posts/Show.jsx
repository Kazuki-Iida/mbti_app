import React ,{useEffect} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm,  } from '@inertiajs/react';
import { useState } from "react";
import Menu from "../Common/Menu";
import ChildCreate from './ChildCreate';
import LikeButton from '../Button/LikeButton';
//import { FollowButton } from "../Button/FollowButton";
//import InfiniteScroll from "react-infinite-scroller"

function Show( props ) {
    const { parent_post, post, child_posts, likedPosts: initialLikedPosts } = props;
    
    console.log('post',post);
    console.log('parent_post',parent_post);
    console.log('child_posts',child_posts);
    console.log('likedpost', initialLikedPosts)
    
    const [likedPosts, setLikedPosts] = useState(initialLikedPosts); 
    
    
    useEffect(() => {
        setLikedPosts(props.likedPosts);
    }, []); 
    
    
    // const [childPostsData, setChildPostsData] = useState(child_posts);
    return (
        <>
        <div className="fixed flex items-center left-[18%] p-[12px] bg-neutral-100 w-full border-b border-gray-300">
            <p className="font-bold text-xl mr-5"></p>
            <input type="text" placeholder = "🔎検索"className="bg-neutral-100 block rounded-md w-[70%] border-gray-300 focus:ring-0"/>
        </div>
            <div className="w-[18%] bg-neutral-100 text-gray-900 p-10 fixed h-screen overflow-scroll border-r border-gray-300">
                <h1 className="font-bold text-2xl"><Link href="/">MBTI APP<span className="text-xs block">あなたはどんな人？</span></Link></h1>
                <div className="border-t border-gray-300 mt-5">
                    <a href="" className="flex font-bold mt-5 items-center"><img className="w-[35px] mr-5"src="../img/pen.png"/>profile</a>
                    <a href="" className="flex font-bold mt-5 items-center"><img className="w-[35px] mr-5"src="../img/hand.png"/>friends</a>
                </div>
                    <div class="border-t border-gray-300 mt-5">
                        <Menu/>
                    </div>
                </div>
            <div class="flex justify-between w-[82%] ml-[18%]">
                <div className="w-[52%] mt-14">
                        <div key={post.id} className="border-t border-gray-300 text-gray-900  py-10 px-10 w-[100%] mt-1">
                                <div class="flex justify-between items-center">
                                    <p className="text-xl font-bold flex items-center object-cover"><img src="../img/sunrise.jpg" className="element w-[40px] h-[40px] mr-5" /><div>{post.user.name}<span className="ml-5 text-xs font-medium text-gray-500">{post.created_at}</span><span className="block text-xs">intp</span></div></p>
                                    <button className="font-bold flex rounded-md border border-gray-400 p-1"><img src="../img/hand.png" className="w-[25px] mr-1"/>friend request</button>
                                </div>
                                <p className="text-md break-words mt-10 leading-8 tracking-tight">{post.body}</p>
                                <img className="mt-5 w-full rounded-xl"src="https://eiga.k-img.com/images/buzz/51968/main_large.jpg" />
                                <div className="mt-5 flex">
                                    <a href="" className="flex items-center text-sm"><img src="../img/comment.png" className="w-[20px] mr-[10px]"/>20</a>
                                    <LikeButton
                                        className="ml-10 flex items-center text-sm"
                                        postId={post.id}
                                        initialIsLiked={likedPosts.includes(post.id)}
                                        initialLikesCount={post.likes_count}
                                        setLikedPosts={setLikedPosts}
                                    　　/>
                                </div>
                        </div>
                        <ChildCreate parentId={post.id}/>
                        <div className="pb-24">
                            {child_posts.map((child_post) => (
                                <>
                                    <div key={child_post.id} className="border-t border-gray-300 text-gray-900  py-5  w-[100%] mt-1">
                                        <div class="flex justify-between items-center">
                                        <p className="text-xl font-bold flex items-center object-cover"><img src="../img/sunrise.jpg" className="element w-[40px] h-[40px] mr-5" /><div>{child_post.user.name}<span className="ml-5 text-xs font-medium text-gray-500">{child_post.created_at}</span><span className="block text-xs">intp</span></div></p>
                                        <button className="font-bold flex rounded-md border border-gray-400 p-1"><img src="../img/hand.png" className="w-[25px] mr-1"/>friend request</button>
                                    </div>
                                    <Link href={`/posts/${child_post.id}`}>
                                        <p className="text-md break-words mt-5 leading-8 tracking-tight">{child_post.body}</p>
                                    </Link>
                                    <img className="mt-5 w-full rounded-xl"src="https://pbs.twimg.com/media/Dii55LMVQAEhSZJ?format=jpg&name=4096x4096" />
                                    <div className="mt-5 flex">
                                        <a href="" className="flex items-center text-sm"><img src="../img/comment.png" className="w-[20px] mr-[10px]"/>20</a>
                                        <LikeButton
                                            className="ml-10 flex items-center text-sm"
                                            postId={child_post.id}
                                            initialIsLiked={likedPosts.includes(child_post.id)}
                                            initialLikesCount={child_post.likes_count}
                                            setLikedPosts={setLikedPosts}
                                        　　/>
                                    </div>
                                    </div>
                                </>
                            ))}
                             <>
                                {parent_post !== null ? (
                                <div key={parent_post.id} className="border-t border-gray-300 text-gray-900 py-5 w-[100%] mt-1">
                                    <div class="flex justify-between items-center">
                                        <p className="text-xl font-bold flex items-center object-cover"><img src="../img/sunrise.jpg" className="element w-[40px] h-[40px] mr-5" /><div>{parent_post.user.name}<span className="ml-5 text-xs font-medium text-gray-500">{parent_post.created_at}</span><span className="block text-xs">intp</span></div></p>
                                        <button className="font-bold flex rounded-md border border-gray-400 p-1"><img src="../img/hand.png" className="w-[25px] mr-1"/>friend request</button>
                                    </div>
                                    <Link href={`/posts/${parent_post.id}`}>
                                        <p className="text-md break-words mt-5 leading-8 tracking-tight">{parent_post.body}</p>
                                        <img className="mt-5 w-full rounded-xl"src="https://pbs.twimg.com/media/Dii55LMVQAEhSZJ?format=jpg&name=4096x4096" />
                                    </Link>
                                    <div className="mt-5 flex">
                                        <a href="" className="flex items-center text-sm"><img src="../img/comment.png" className="w-[20px] mr-[10px]"/>20</a>
                                        <LikeButton
                                            className="ml-10 flex items-center text-sm"
                                            postId={parent_post.id}
                                            initialIsLiked={likedPosts.includes(parent_post.id)}
                                            initialLikesCount={parent_post.likes_count}
                                            setLikedPosts={setLikedPosts}
                                        />
                                    </div>
                                </div>
                                ) : null}
                            
                                {parent_post !== null ? <ChildCreate /> : null}
                            </>
                        </div>
                </div>
               
            </div>
        </>
    );
}

export default Show;