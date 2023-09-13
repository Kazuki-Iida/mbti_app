import React, { useEffect, useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import heartAnimation from "@/Components/LikeIconAnim";

export const FavoriteIconAnim = ({ isLiked, onClick }) => {
  const playerRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const player = playerRef.current;

    // onClick プロパティが呼び出された場合にアニメーションを再生
    if (onClick && !hasPlayed) {
      if (player) {
        player.onComplete = () => {
          return;
        };
        player.play();
      }
      setHasPlayed(true); // アニメーションが再生されたことを記録
    } else {
      // isLiked プロパティに基づいてアニメーションを制御
      if (player) {
        if (isLiked) {
          player.play();
        } else {
          player.stop();
        }
      }
    }
  }, [isLiked, hasPlayed, onClick]);

  return <Player ref={playerRef} speed={1.8} keepLastFrame src={heartAnimation} />;
};
