import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FavoriteIconAnim } from '../Anim/FavoriteIconAnim';

const LikeButton = ({ postId, initialIsLiked, initialLikesCount, setLikedPosts }) => {
    const [isLiked, setIsLiked] = useState(false); // 初期値を false に設定
    const [likesCount, setLikesCount] = useState(initialLikesCount);

    const handleLike = async () => {
        if (!isLiked) {
            try {
                const response = await axios.post(`/posts/${postId}/like`);
                setLikesCount(response.data.likes_count);
                setIsLiked(true);
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                const response = await axios.post(`/posts/${postId}/dislike`);
                setLikesCount(response.data.likes_count);
                setIsLiked(false);
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        // リロード時に initialIsLiked の値を反映
        setIsLiked(initialIsLiked);
    }, [initialIsLiked]); // initialIsLiked の変更を監視

    return (
        <div>
            <button onClick={handleLike} className={`flex items-center relative w-20 h-20 cursor-pointer ${isLiked ? 'liked' : ''}`}>
                <FavoriteIconAnim isLiked={isLiked} />
                <p className={`${isLiked ? 'hidden' : 'block text-2xl'}`}>♡</p>
                <p className={`${isLiked ? 'font-bold relative right-5' : 'font-bold relative'}`}>{likesCount}</p>
            </button>
        </div>
    );
};

export default LikeButton;
