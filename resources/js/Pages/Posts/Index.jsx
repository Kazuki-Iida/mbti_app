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
//import { FollowButton } from "../Button/FollowButton";
//import InfiniteScroll from "react-infinite-scroller"

function Index( props ) {
    console.log( props );
    const { posts ,user ,auth, likedPosts: initialLikedPosts, friends: initialFriendsList, permitters: initialRequestersList} = props;
    
    
　　const [openModalForPost, setOpenModalForPost] = useState(null);

      const openModal = (postId) => {
        setOpenModalForPost(postId);
      };
    
      const closeModal = () => {
        setOpenModalForPost(null);
      };
        
    const {data , setData , post} = useForm({
        search:"",
    })
    const searchSubmit = async (e) => {
        e.preventDefault();
        post('/');
    }
    const [likedPosts, setLikedPosts] = useState(initialLikedPosts); 
    const [postsData, setPostsData] = useState(posts);
    const [friendsList, setFriendsList] = useState(initialFriendsList);
    const [permittersList, setPermittersList] = useState(initialRequestersList);
    
    useEffect(() => {
    const fetchFriendsList = async () => {
        try {
            const response = await axios.get('/friend/getFriendsList');
            console.log('Response data:', response.data);
            setFriendsList(response.data);

            
            console.log('friendsList:', response.data);

            
        } catch (error) {
            console.error('友達リストの取得に失敗しました: ', error);
        }
    };

    fetchFriendsList(); 
}, []); // 依存リストを空にする

    useEffect(() => {
    const fetchPermittersList = async () => {
        try {
            const response = await axios.get('/friend/getPermittersList');
            console.log('Response data:', response.data); // データが正しく取得できていることを確認
            setPermittersList(response.data);

            // データの取得とfriendsListの更新が完了した後に処理を行う
            console.log('permittersList:', response.data);

            // ここで他の処理を行うことができます
        } catch (error) {
            console.error('申請リストの取得に失敗しました: ', error);
        }
    };

    fetchPermittersList(); 
}, []); // 依存リストを空にする
        
        // useEffect(() => {
        //     console.log('friendsList:', friendsList);
        // }, [friendsList]);
        const isFriendOrRequested = (postUserId) => {
            // 自分と相手のIDを取得
            const myId = auth.user.id;
            const friendId = postUserId;
        
            // 自分と相手が友達であるかを確認
            const isFriend = friendsList.some((friend) => {
                return (friend.id === postUserId) 
            });
        
            // 自分が相手に友達申請を送っているかを確認
            const isPermittered = permittersList.some((permitter) => permitter.id === friendId);
        
            return isFriend ? "フレンド" : isPermittered ? "申請済み" : "friend request";
        };
        

    
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
        const container = document.getElementById('container');
        const boxes = container.querySelectorAll('.post');

        container.addEventListener('scroll', () => {
        const containerCenter = container.scrollTop + container.clientHeight / 2;

        boxes.forEach((box) => {
            const boxTop = box.offsetTop + box.clientHeight ;
            const distanceToCenter = Math.abs(containerCenter - boxTop);

            if (distanceToCenter < container.clientHeight  / 1.5) {
                box.classList.add('big');
                box.classList.remove('small');
            } else {
                box.classList.remove('big');
                box.classList.add('small');
            }
        });
    })
        
    },[])
    return (
        <>  
        <div className="fixed z-10 flex items-center left-[18%] p-[12px] bg-neutral-100 w-full border-b border-gray-300">
            <p className="font-bold text-xl mr-5">home</p>
            <form onSubmit={searchSubmit} className="flex w-full">

                <input onChange={(e) => setData('search',e.target.value)} name="search" type="text" placeholder = "検索"className="bg-neutral-100 block rounded-md w-[70%] border-gray-300 focus:ring-0"/><button type="submit"className="block p-1 px-5 rounded-md bg-gray-200 ml-5">🔍</button>

            </form>
        </div>
            <div className="w-[18%] bg-neutral-100 text-gray-900 p-10 fixed h-screen overflow-scroll border-r border-gray-300">
                <h1 className="font-bold text-2xl">MBTI APP<span className="text-xs block">あなたはどんな人？</span></h1>
                <div className="border-t border-gray-300 mt-5">
                <Link href={route('logout')} method="post" as="button">logout</Link>
                    <Link href="" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src={auth.user.image_path}/>profile</Link>
                    <Link href="" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/hand.png"/>friends</Link>
                    <Link href="/request/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/hand.png"/>Requests</Link>
                </div>
                <div className="border-t border-gray-300 mt-5">
                    <Menu/>
                </div>
            </div>
            <div id="container" class="flex justify-between w-[82%] ml-[18%]">
                {/* <InfiniteScroll posts = { posts }/> */}
                <div className="w-[52%] mt-14">
                { posts.map(( post ) => (
                    
                        <div key={post.id} className="post bg-neutral-100 border-t border-gray-300 text-gray-900  py-10 px-10 w-[100%] mt-1">
                            
                                <div class="flex justify-between items-center">
                                    <p className="text-xl font-bold flex items-center object-cover"><img src={post.user.image_path} className="element w-[40px] h-[40px] mr-5" /><div>{post.user.name}<span className="ml-5 text-xs font-medium text-gray-500">{post.created_at}</span><span className="block text-xs"> {post.user.mbti.name}</span></div></p>
                                   <button
                                    className="font-bold flex rounded-md border border-gray-400 p-1"
                                    onClick={() => {
                                        const status = isFriendOrRequested(post.user_id);
                                        if (status === "フレンド") {
                                            // フレンドの場合の処理
                                            alert("すでにフレンドです");
                                        } else if (status === "申請済み") {
                                            // 申請済みの場合の処理
                                            alert("すでに申請済みです");
                                        } else {
                                            // フレンドでも申請済みでもない場合、モーダルを開く
                                            openModal(post.id);
                                        }
                                    }}
                                >
                                    <img src="img/hand.png" className="w-[25px] mr-1" />
                                    {isFriendOrRequested(post.user_id)}
                                </button>
                                        {openModalForPost === post.id && (
                                          <div className="modal">
                                            <div className="modal-content">
                                              <span className="close" onClick={closeModal}>&times;</span>
                                              <FriendRequestButton
                                                permitterId={post.user_id}
                                                postId={post.id}
                                                onRequestComplete={(success) => {
                                                  if (success) {
                                                    closeModal();
                                                  }
                                                }}
                                              />
                                            </div>
                                          </div>
                                        )}
                                </div>
                                <Link href={`/posts/${post.id}`}>
                                    <p className="text-md break-words mt-10 leading-8 tracking-tight">{post.id}{post.body}</p>
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
                                    <a href="" className="flex items-center text-sm"><img src="img/comment.png" className="w-[20px] mr-[10px]"/>20</a>
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
               
                    <ParentCreate profileImage = {auth.user.image_path} /> {/* ParentCreateコンポーネントを配置 */}
                

            </div>
        </>
    );
}

export default Index;