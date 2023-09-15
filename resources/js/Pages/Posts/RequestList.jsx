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

function RequestList( props ) {
    const {auth, requests, mbtis} = props;
    console.log(requests);
    const handleApproval = async (requester) => {
      try {
        // API エンドポイントを呼び出し、承認を実行
        const response = await axios.post('/request/permit', { requester: requester });
    
        if (response.status === 200) {
          // 承認が成功した場合、ここで該当の requester を非表示にする処理を実行
          const requesterElement = document.getElementById(`requester-${requester.id}`);
          if (requesterElement) {
            requesterElement.style.display = 'none';
          }
        } else {
          console.log('繋がり申請の承認に失敗しました。');
        }
      } catch (error) {
        // alert('エラーが発生しました。繋がり申請の承認に失敗しました。');
        console.error(error);
      }
    };
  //   useEffect(() => {
  //     const imgClasses = {
  //   1: 'img1',
  //   2: 'img2',
  //   3: 'img3',
  //   4: 'img4',
  //   5: 'img5',
  //   6: 'img6',
  //   7: 'img7',
  //   8: 'img8',
  //   9: 'img9',
  //   10: 'img10',
  //   11: 'img11',
  //   12: 'img12',
  //   13: 'img13',
  //   14: 'img14',
  //   15: 'img15',
  //   16: 'img16',
  // };
  // // data-img属性値を持つ要素に対して処理を行う
  // Object.entries(imgClasses).forEach(([dataAttr, className]) => {
  //   const img = document.querySelector(`[data-img="${dataAttr}"]`);
  //   const btn1 = document.querySelector(`[data-animal="1"]`);
  //   btn1.addEventListener('click', () => {
  //     img.classList.add(className);
  //     console.log('done');
  //   });
  // });
      // const btns1 = document.querySelectorAll('[data-animal="1"]');
      // btns1.forEach((btn1) => {
      //     btn1.addEventListener("click", () => {
      //     const image1 = document.createElement("img");
      //     image1.src =
      //       "../img/uma.png";
      //     image1.id = "img1";
      //     image1.className="w-[85px] h-[85px]";
      //     const imageContainer = document.getElementById("imageContainer");
      //     imageContainer.appendChild(image1);
      //     image1.classList.add("hi");
      //     console.log('ok')
      // });
      // });
      // const btns2 = document.querySelectorAll('[data-animal="2"]');
      // btns2.forEach((btn2) => {
      //     btn2.addEventListener("click", () => {
      //     const image2 = document.createElement("img");
      //     image2.src =
      //       "../img/usi.png";
      //     image2.id = "img2";
      //     image2.className="w-[85px] h-[85px]";
      //     const imageContainer = document.getElementById("imageContainer");
      //     imageContainer.appendChild(image2);
      //     image2.classList.add("hi2");
      //     console.log('ok')
      // });
      // });
      // const test = document.getElementById("test");
      // const btn1 = document.getElementById("3");
      // btn1.addEventListener("click", () => {
      //   const image1 = document.createElement("img");
      //   image1.src =
      //     "../img/uma.png";
      //   image1.id = "img1";
      //   const imageContainer = document.getElementById("imageContainer");
      //   imageContainer.appendChild(image1);
      //   image1.classList.add("hi");
      // });
      // const btn2 = document.getElementById("2");
      // btn2.addEventListener("click", () => {
      //   const image2 = document.createElement("img");
      //   const imageContainer = document.getElementById("imageContainer");
      //   image2.src =
      //     "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-607408726-1653469977.jpg?resize=640:*";
      //   image2.id = "2";
      //   imageContainer.appendChild(image2);
      //   image2.classList.add("hi2");
      // });
      // const btn3 = document.getElementById("3");
      // btn3.addEventListener("click", () => {
      //   const image3 = document.createElement("img");
      //   const imageContainer = document.getElementById("imageContainer");
      
      //   image3.src =
      //     "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-607408726-1653469977.jpg?resize=640:*";
      //   image3.id = "3";
      //   imageContainer.appendChild(image3);
      //   image3.classList.add("hi3");
      // });
      // const btn4 = document.getElementById("4");
      // btn4.addEventListener("click", () => {
      //   const image4 = document.createElement("img");
      //   const imageContainer = document.getElementById("imageContainer");
      
      //   image4.src =
      //     "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-607408726-1653469977.jpg?resize=640:*";
      //   image4.id = "4";
      //   imageContainer.appendChild(image4);
      //   image4.classList.add("hi4");
      // });
      // const btn5 = document.getElementById("5");
      // btn5.addEventListener("click", () => {
      //   const image5 = document.createElement("img");
      //   const imageContainer = document.getElementById("imageContainer");
      
      //   image5.src =
      //     "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-607408726-1653469977.jpg?resize=640:*";
      //   image5.id = "5";
      //   imageContainer.appendChild(image5);
      //   image5.classList.add("hi5");
      // });

    // }, []); 
    useEffect(() => {
  // data-img属性値とクラス名の対応を定義
  const imgClasses = {
    1: 'img1',
    2: 'img2',
    3: 'img3',
    4: 'img4',
    5: 'img5',
    6: 'img6',
    7: 'img7',
    8: 'img8',
    9: 'img9',
    10: 'img10',
    11: 'img11',
    12: 'img12',
    13: 'img13',
    14: 'img14',
    15: 'img15',
    16: 'img16',
  };

  // ボタンをクリックしたときの処理を定義
  const handleButtonClick = (dataAttr) => {
    const img = document.querySelector(`[data-img="${dataAttr}"]`);
    img.classList.add(imgClasses[dataAttr]);
    console.log('done');
  };

  // 各ボタンにイベントリスナーを追加
  // for (let i = 1; i <= 16; i++) {
  //   const btn = document.querySelector(`[data-animal="${i}"]`);
  //   console.log(btn);
  //   btn.addEventListener('click', () => {
  //     handleButtonClick(i);
  //   });
  // }
  const buttonValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// 各ボタンに対してイベントリスナーを追加
buttonValues.forEach((value) => {
  const buttons = document.querySelectorAll(`[data-animal="${value}"]`);
  console.log('buttons', buttons);
  
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      handleButtonClick(value);
    });
  });
});
}, []);

    return (
        <>  
            <div className="w-[18%] bg-neutral-100 text-gray-900 p-10 fixed h-screen overflow-scroll border-r border-gray-300">
                <Link href="/"><h1 className="font-bold text-4xl">Pots<span className="text-xs block">animal conn(ll)ection</span></h1></Link>
                <div className="border-t border-gray-300 mt-5">
                    <Link href="/profile" className="flex font-bold mt-5 items-center ml-5 rouded-md"><img className="w-[35px] mr-5  block" src={auth.user.image_path}/>profile</Link>
                    <Link href="/friend/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/hand.png"/>friends</Link>
                    <Link href="/request/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/req.png"/>Requests</Link>
                </div>
                <div className="border-t border-gray-300 mt-5">
                    <Menu/>
                </div>
            </div>
            <div id="container" class="flex justify-between w-[82%] ml-[18%]">
                <div className="w-[52%] mt-14">
                    <div className="font-bold pl-10 text-2xl flex"><img className="w-[30px] h-[30px] mr-[20px]"src="/img/human.png"/><p>フレンド申請</p></div>
                    {requests.map((request) => (
                      <div className="mt-10 pl-10" key={request.request_user.id} id={`requester-${request.request_user.id}`}>
                        <div className="flex items-center bg-gray-100 border border-black p-5 rounded-md justify-between">
                          <div className="flex items-center">
                            <Link href={`/profile/user/${request.request_user.id}`}><img className="w-[60px] h-[60px] rounded-md mr-5" src={request.request_user.image_path} /></Link>
                            <div>
                              <p className="font-bold text-xl">{request.request_user.name}</p>
                              <span className="font-bold">
                                {mbtis.find((mbti) => mbti.id === request.request_user.mbti_id)?.name}
                              </span>
                            </div>
                            <div>
                              <p className="ml-5 text-gray-600 w-[200px] overflow-scroll">{request.message}</p>
                            </div>
                          </div>
                          <button
                            className="bg-white flex items-center justify-between py-1 px-5 rounded-md font-bold hover:opacity-80	"
                            data-animal={`${request.request_user.mbti_id}`}
                            onClick={() => handleApproval(request.request_user)}
                          >
                            <img className="w-[30px] h-[30px]" src="/img/hand.png" />
                            <p className="ml-5">承認</p>
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="w-[39%] relative">
                     <div className="pot w-full h-[50%] bg-black absolute bottom-[20px] right-[20px]">
                     </div>
                     <div id="animal-id">
                        <img data-img="1"className="w-[80px] h-[80px]" id="img1" src="../img/uma.png" />
                        <img data-img="2"className="w-[80px] h-[80px]"id="img2" src="../img/usi.png" />
                        <img data-img="3"className="w-[80px] h-[80px]"id="img3" src="../img/kuma.png" />
                        <img data-img="4"className="w-[80px] h-[80px]"id="img4" src="../img/simauma.png"/>
                        <img data-img="5"className="w-[80px] h-[80px]"id="img5" src="../img/dog.png" />
                        <img data-img="6"className="w-[80px] h-[80px]"id="img6" src="../img/zou.png" />
                        <img data-img="7"className="w-[80px] h-[80px]"id="img7" src="../img/lion.png" />
                        <img data-img="8"className="w-[80px] h-[80px]"id="img8" src="../img/oumu.png" />
                        <img data-img="9"className="w-[80px] h-[80px]"id="img9" src="../img/sika.png" />
                        <img data-img="10"className="w-[80px] h-[80px]"id="img10" src="../img/hituji.png" />
                        <img data-img="11"className="w-[80px] h-[80px]"id="img11" src="../img/kaba.png" />
                        <img data-img="12"className="w-[80px] h-[80px]"id="img12" src="../img/cat.png" />
                        <img data-img="13"className="w-[80px] h-[80px]"id="img13" src="../img/kirin.png" />
                        <img data-img="14"className="w-[80px] h-[80px]"id="img14" src="../img/usagi.png" />
                        <img data-img="15"className="w-[80px] h-[80px]"id="img15" src="../img/tora.png" />
                        <img data-img="16"className="w-[80px] h-[80px]"id="img16" src="../img/hukuro.png" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RequestList;