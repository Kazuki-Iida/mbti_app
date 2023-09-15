import React ,{useEffect} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm,  } from '@inertiajs/react';
import { useState } from "react";
import Menu from "../Common/Menu";
import ChildCreate from './ChildCreate';
import LikeButton from '../Button/LikeButton';
import FriendRequestButton from '../Button/FriendRequestButton';
//import { FollowButton } from "../Button/FollowButton";
//import InfiniteScroll from "react-infinite-scroller"

function Show( props ) {
    const { parent_post, post,auth, child_posts, likedPosts: initialLikedPosts, friends: initialFriendsList, permitters: initialRequestersList} = props;
    
    console.log('post',post);
    console.log('parent_post',parent_post);
    console.log('child_posts',child_posts);
    console.log('likedpost', initialLikedPosts)
    
    //ここからフレンド申請
    const [showBanner, setShowBanner] = useState(false); // バナーの表示状態を管理
    
    
  
　　const [openModalForPost, setOpenModalForPost] = useState(null);

      const openModal = (postId) => {
        setOpenModalForPost(postId);
      };
    
      const closeModal = () => {
        setOpenModalForPost(null);
      };
      
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
        
    
    //ここまでフレンド申請
    
    
    //ここからいいね機能
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
                    <Link href="" className="flex font-bold mt-5 items-center"><img className="w-[35px] mr-5"src={auth.user.image_path}/>profile</Link>
                    <Link href="" className="flex font-bold mt-5 items-center"><img className="w-[35px] mr-5"src="../img/hand.png"/>friends</Link>
                    <Link href="/request/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/req.png"/>Requests</Link>
                </div>
                    <div class="border-t border-gray-300 mt-5">
                        <Menu/>
                    </div>
                </div>
            <div class="flex justify-between w-[82%] ml-[18%]">
                <div className="w-[52%] mt-14">
                        <div key={post.id} className="border-t border-gray-300 text-gray-900  py-10 px-10 w-[100%] mt-1">
                                <div class="flex justify-between items-center">
                                    <p className="text-xl font-bold flex items-center object-cover"><img src={post.user.image_path} className="element w-[40px] h-[40px] mr-5" /><div>{post.user.name}<span className="ml-5 text-xs font-medium text-gray-500">{post.created_at}</span><span className="block text-xs">{post.user.mbti.name}</span></div></p>
                                    {auth.user.id !== post.user_id && (
                                        <button
                                          className="font-bold flex rounded-md border border-gray-400 p-1"
                                          onClick={() => {
                                            const status = isFriendOrRequested(post.user_id);
                                            if (status === "申請済み") {
                                              // 申請済みの場合の処理
                                              alert("すでに申請済みです");
                                            } else {
                                              // フレンドでも申請済みでもない場合、モーダルを開く
                                              openModal(post.id);
                                            }
                                          }}
                                        >
                                          <img src="../img/hand.png" className="w-[25px] mr-1" />
                                          {isFriendOrRequested(post.user_id)}
                                        </button>
                                    )}
                                        {openModalForPost === post.id && (
                                          <div className="modal">
                                            <div className="modal-content">
                                              <span className="close" onClick={closeModal}>&times;</span>
                                              <FriendRequestButton
                                                permitterId={post.user_id}
                                                postId={post.id}
                                                onRequestComplete={(success) => {
                                                  if (success) {
                                                  setShowBanner(true);
                                                   console.log(showBanner)
                                                    closeModal();
                                                  }
                                                }}
                                              />
                                            </div>
                                          </div>
                                        )}
                                    
                                </div>
                                <p className="text-md break-words mt-10 leading-8 tracking-tight">{post.body}</p>
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
                                    <a href="" className="flex items-center text-sm"><img src="../img/comment.png" className="w-[20px] mr-[10px]"/>{post.child_posts_count}</a>
                                    <LikeButton
                                        className="ml-10 flex items-center text-sm"
                                        postId={post.id}
                                        initialIsLiked={likedPosts.includes(post.id)}
                                        initialLikesCount={post.likes_count}
                                        setLikedPosts={setLikedPosts}
                                    　　/>
                                </div>
                        </div>
                        <ChildCreate parentId={post.id} profileImage={auth.user.image_path}/>
                        <div className="px-24">
                            {child_posts.map((child_post) => (
                                <>
                                    <div key={child_post.id} className="border-b border-gray-300 text-gray-900 py-5  w-[100%] mt-1">
                                        <div class="flex justify-between items-center">
                                        <p className="text-xl font-bold flex items-center object-cover"><img src={child_post.user.image_path} className="element w-[40px] h-[40px] mr-5" /><div>{child_post.user.name}<span className="ml-5 text-xs font-medium text-gray-500">{child_post.created_at}</span><span className="block text-xs">intp</span></div></p>
                                        {auth.user.id !== child_post.user_id && (
                                            <button
                                              className="font-bold flex rounded-md border border-gray-400 p-1"
                                              onClick={() => {
                                                const status = isFriendOrRequested(child_post.user_id);
                                                if (status === "申請済み") {
                                                  // 申請済みの場合の処理
                                                  alert("すでに申請済みです");
                                                } else {
                                                  // フレンドでも申請済みでもない場合、モーダルを開く
                                                  openModal(child_post.id);
                                                }
                                              }}
                                            >
                                              <img src="../img/hand.png" className="w-[25px] mr-1" />
                                              {isFriendOrRequested(child_post.user_id)}
                                            </button>
                                        )}
                                            {openModalForPost === child_post.id && (
                                              <div className="modal">
                                                <div className="modal-content">
                                                  <span className="close" onClick={closeModal}>&times;</span>
                                                      <FriendRequestButton
                                                        permitterId={child_post.user_id}
                                                        postId={child_post.id}
                                                        onRequestComplete={(success) => {
                                                          if (success) {
                                                          setShowBanner(true);
                                                           console.log(showBanner)
                                                            closeModal();
                                                          }
                                                        }}
                                                      />
                                                </div>
                                              </div>
                                            )}
                                    </div>
                                    <Link href={`/posts/${child_post.id}`}>
                                        <p className="text-md break-words mt-5 leading-8 tracking-tight">{child_post.body}</p>
                                    </Link>
                                    <div className="grid gap-5 grid-cols-2 w-full mt-5">
                                        {child_post.images && child_post.images.map((image, index) => ( //実際の写真を表示する用)
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
                                        <a href="" className="flex items-center text-sm"><img src="../img/comment.png" className="w-[20px] mr-[10px]"/>{child_post.child_posts_count}</a>
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
                                <div key={parent_post.id} className="border-b border-gray-300 text-gray-900 py-5 w-[100%] mt-1">
                                    <div class="flex justify-between items-center">
                                        <p className="text-xl font-bold flex items-center object-cover"><img src={parent_post.user.image_path} className="element w-[40px] h-[40px] mr-5" /><div>{parent_post.user.name}<span className="ml-5 text-xs font-medium text-gray-500">{parent_post.created_at}</span><span className="block text-xs">intp</span></div></p>
                                        {auth.user.id !== parent_post.user_id && (
                                            <button
                                              className="font-bold flex rounded-md border border-gray-400 p-1"
                                              onClick={() => {
                                                const status = isFriendOrRequested(parent_post.user_id);
                                                if (status === "申請済み") {
                                                  // 申請済みの場合の処理
                                                  alert("すでに申請済みです");
                                                } else {
                                                  // フレンドでも申請済みでもない場合、モーダルを開く
                                                  openModal(parent_post.id);
                                                }
                                              }}
                                            >
                                              <img src="../img/hand.png" className="w-[25px] mr-1" />
                                              {isFriendOrRequested(parent_post.user_id)}
                                            </button>
                                        )}
                                            {openModalForPost === parent_post.id && (
                                              <div className="modal">
                                                <div className="modal-content">
                                                  <span className="close" onClick={closeModal}>&times;</span>
                                                      <FriendRequestButton
                                                        permitterId={parent_post.user_id}
                                                        postId={parent_post.id}
                                                        onRequestComplete={(success) => {
                                                          if (success) {
                                                          setShowBanner(true);
                                                           console.log(showBanner)
                                                            closeModal();
                                                          }
                                                        }}
                                                      />
                                                </div>
                                              </div>
                                            )}
                                    </div>
                                    <Link href={`/posts/${parent_post.id}`}>
                                        <p className="text-md break-words mt-5 leading-8 tracking-tight">{parent_post.body}</p>
                                    </Link>
                                        <div className="grid gap-5 grid-cols-2 w-full mt-5">
                                            {parent_post.images && parent_post.images.map((image, index) => ( //実際の写真を表示する用)
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
                                        <a href="" className="flex items-center text-sm"><img src="../img/comment.png" className="w-[20px] mr-[10px]"/>{parent_post.child_posts_count}</a>
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
                            
                               
                            </>
                        </div>
                </div>
               
            </div>
        </>
    );
}

export default Show;