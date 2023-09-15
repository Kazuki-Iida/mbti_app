import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import UpdateProfileImage from './Partials/UpdateProfileImage';
import { Head,Link } from '@inertiajs/react';
import Menu from '../Common/Menu';
import React, { useState, useEffect } from 'react';

export default function Edit({ auth, mustVerifyEmail, status,mbti }) {
    console.log('mbti',mbti.name);
    //  useEffect(() => {
    //     const img1 = document.querySelector('[data-img="1"]');
    //     window.addEventListener('load', () => {
    //         img1.classList.add('img1');
    //         console.log('done')
    //     });
    //     const img2 = document.querySelector('[data-img="2"]');
    //     window.addEventListener('load', () => {
    //         img2.classList.add('img2');
    //         console.log('done')
    //     });
    //     const img3 = document.querySelector('[data-img="3"]');
    //     window.addEventListener('load', () => {
    //         img3.classList.add('img3');
    //         console.log('done')
    //     });
    //     const img4 = document.querySelector('[data-img="4"]');
    //     window.addEventListener('load', () => {
    //         img4.classList.add('img4');
    //         console.log('done')
    //     });
    //     const img5 = document.querySelector('[data-img="5"]');
    //     window.addEventListener('load', () => {
    //         img5.classList.add('img5');
    //         console.log('done')
    //     });
    // }, []); 
    useEffect(() => {
  // 複数の要素のdata-img属性値とクラス名の対応を定義
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

  // data-img属性値を持つ要素に対して処理を行う
  Object.entries(imgClasses).forEach(([dataAttr, className]) => {
    const img = document.querySelector(`[data-img="${dataAttr}"]`);
    const btn = document.querySelector('.friendBtn');
    btn.addEventListener('click', () => {
        btn.classList.add('hidden');
      img.classList.add(className);
      console.log('done');
    });
  });
}, []);

    return (
    <>
            <div className="w-[18%] bg-neutral-100 text-gray-900 p-10 fixed h-screen overflow-scroll border-r border-gray-300">
                <Link href="/"><h1 className="font-bold text-4xl">Pots<span className="text-xs block">animal conn(ll)ection</span></h1></Link>
                <div className="border-t border-gray-300 mt-5">
                    <Link href="/profile" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src={auth.user.image_path}/>profile</Link>
                    <Link href="/friend/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/hand.png"/>friends</Link>
                    <Link href="/request/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/req.png"/>Requests</Link>
                </div>
                <div className="border-t border-gray-300 mt-5">
                    <Menu/>
                </div>
            </div>
            <div id="container" class="flex justify-between w-[82%] ml-[18%]">
                <div className="w-[52%] mt-14">
                    <div className="font-bold pl-10 text-2xl flex"><img className="w-[30px] h-[30px] mr-[20px]"src="/img/human.png"/><p>プロフィール</p></div>
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                            <div className="p-8">
                                <UpdateProfileImage className="max-w-xl" auth={auth}/>
                            </div>
                            <div className="px-8">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="max-w-xl"
                                    mbti={mbti.name}
                                />
                            </div>
                            
                            {/*<div className="sm:p-8  sm:rounded-lg">
                                <UpdatePasswordForm className="max-w-xl" />
                            </div>
        
                            <div className="p-4 sm:p-8  sm:rounded-lg">
                                <DeleteUserForm className="max-w-xl" />
                            </div>*/}
                        </div>
                    </div>
                </div>
                <div className="w-[39%] relative">
                    <button className="block friendBtn font-bold absolute top-[20%] border border-black p-5 rounded-md">show my friends</button>
                     <div className="pot w-full h-[50%] bg-gray-900 absolute bottom-[20px] right-[20px]">
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
