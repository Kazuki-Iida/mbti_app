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
    
    const { auth, user, mbtis, posts, likedPosts: initialLikedPosts } = props;
    const [likedPosts, setLikedPosts] = useState(initialLikedPosts); 
    const [postsData, setPostsData] = useState(posts);
    
    const handleLike = async (postId, updatedLikesCount) => {
        // いいねの数を更新する
        setPostsData(prevPostsData => {
            return prevPostsData.map(post => {
                if (post.id === postId) {
                    return {
                        ...post,
                        likes_count: updatedLikesCount
                    };
                }
                return post;
            });
        });

        // いいね済みの投稿を更新
        if (!likedPosts.includes(postId)) {
            setLikedPosts([...likedPosts, postId]);
        } else {
            setLikedPosts(likedPosts.filter(id => id !== postId));
        }
    };
    
    useEffect(() => {
        const img1 = document.querySelector('[data-img="1"]');
        window.addEventListener('onload', () => {
            img1.classList.add('img1');
        });
    }, []); 
    return(
        
        <>
            <div className="w-[18%] bg-neutral-100 text-gray-900 p-10 fixed h-screen overflow-scroll border-r border-gray-300">
                <Link href="/"><h1 className="font-bold text-4xl">Pots<span className="text-xs block">animal conn(ll)ection</span></h1></Link>
                <div className="border-t border-gray-300 mt-5">
                    <Link href="/profile" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src={auth.user.image_path}/>profile</Link>
                    <Link href="/friend/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="/img/hand.png"/>friends</Link>
                    <Link href="/request/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="/img/req.png"/>Requests</Link>
                </div>
                <div className="border-t border-gray-300 mt-5">
                    <Menu/>
                </div>
            </div>
            <div id="container" class="flex justify-between w-[82%] ml-[18%]">
                <div className="w-[52%] mt-14">
                    <div className="fixed">
                        <div className="font-bold pl-10 text-2xl flex"><img className="w-[30px] h-[30px] mr-[20px]"src="/img/human.png"/><p>プロフィール</p></div>
                        <div className="py-12">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                                <div className="p-8">
                                    <div className="max-w-xl"/>
                                        <div className="cursor-pointer px-5 block font-bold text-sm">
                                            <div className="w-[300px] mx-auto">
                                                <div className="w-full">
                                                    <img
                                                        src={user.image_path}
                                                        alt="Profile Image Image Preview"
                                                        className="w-full rounded-xl"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-8">
                                    <p className="block p-5 w-full rounded-md font-bold text-4xl">{user.name}</p>
                                </div>
                                <div className="px-8">
                                    <p className="block p-5 w-full rounded-md font-bold text-4xl">{mbtis.find((mbti) => mbti.id === user.mbti_id)?.name}</p>
                                </div>
                                <div className="px-8">
                                    <p className="block p-5 w-full rounded-md font-bold text-xl">{user.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            
                            {/* <InfiniteScroll posts = { posts }/> */}
                            <div className="w-[52%] mt-14">
                            { posts.map(( post ) => (
                                
                                    <div key={post.id} className="post bg-neutral-100 border-t border-l border-gray-300 text-gray-900  py-10 px-10 w-[100%] mt-1">
                                        
                                            <div class="flex justify-between items-center">
                                                <p className="text-xl font-bold flex items-center object-cover"><img src={post.user.image_path} className="element w-[40px] h-[40px] mr-5" /><div>{post.user.name}<span className="ml-5 text-xs font-medium text-gray-500">{post.created_at}</span><span className="block text-xs"> {post.user.mbti.name}</span></div></p>
                                            </div>
                                            <Link href={`/posts/${post.id}`}>
                                                <p className="text-md break-words mt-10 leading-8 tracking-tight">{post.body}</p>
                                            </Link>
            
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
                                                <a href="" className="flex items-center text-sm"><img src="/img/comment.png" className="w-[20px] mr-[10px]"/>{post.child_posts_count}</a>
                                                <LikeButton
                                                className="ml-10 flex items-center text-sm"
                                                postId={post.id}
                                                initialIsLiked={likedPosts.includes(post.id)}
                                                initialLikesCount={post.likes_count}
                                                setLikedPosts={setLikedPosts}
                                            　　/>
                                            </div>
                                        
                                    </div>
                            ))}
                            </div>
                        </div>
                <div className="w-[39%] relative">
                     <div className="pot w-full h-[50%] bg-gray-900 absolute bottom-[20px] right-[20px]">
                     </div>
                     
                </div>
          
        </>      
        
        );
    }
export default Profile;