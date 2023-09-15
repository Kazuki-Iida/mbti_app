import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';

const ChildCreate = (props) => {
    const parent_post_id = props.parentId;
    // フォームデータを初期化
    const { data, setData, post } = useForm({
        parent_post_id: parent_post_id,
        body: "",
        images: [], // 画像ファイルを複数のファイルとして管理するための配列
    });
    // プレビュー用のステートを初期化
    const [imagePreview, setImagePreview] = useState(null);
    // 本文空白のバナー表示用ステート
    const [showEmptyBodyBanner, setShowEmptyBodyBanner] = useState(false);
    const [showTooLongBodyBanner, setShowTooLongBodyBanner] = useState(false);
    const [showTooManyImagesBanner, setShowTooManyImagesBanner] = useState(false);

    const handleTextareaChange = (e) => {
        const inputValue = e.target.value;
        setData('body', inputValue);
    };

    const formatText = (text) => {
        const formattedText = text.replace(/(#\S+)/g, '<span style="color: blue;">$1</span>');
        return { __html: formattedText };
    };

    // 画像ファイルが選択されたときの処理
    const handleFileChange = (e) => {
        const files = e.target.files;
        const imagesArray = Array.from(files);
        
        // 4枚を超える場合は選択を制限
        if (imagesArray.length + data.images.length > 4) {
            setShowTooManyImagesBanner(true);
            // 3秒後にエラーバナーを非表示にする
            setTimeout(() => setShowTooManyImagesBanner(false), 2000);
            return;
        }

        // プレビューを表示
        const previews = [];
        for (let i = 0; i < imagesArray.length; i++) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previews.push(e.target.result);
                // すべてのプレビューを更新
                if (previews.length === imagesArray.length) {
                    setImagePreview(previews);
                }
            };
            reader.readAsDataURL(imagesArray[i]);
        }

        // フォームデータに選択した画像を追加
        setData('images', [...data.images, ...imagesArray]);
    };

    // フォームを送信する処理
    const handleSendPosts = (e) => {
        e.preventDefault();
        // 本文の文字数をチェック
        if (data.body.length === 0) {
            // 本文が空の場合、エラーバナーを表示
            setShowEmptyBodyBanner(true);
            // 3秒後にエラーバナーを非表示にする
            setTimeout(() => setShowEmptyBodyBanner(false), 2000);
        } else if (data.body.length > 200) {
            // 本文が200文字を超える場合、エラーバナーを表示
            setShowTooLongBodyBanner(true);
            // 3秒後にエラーバナーを非表示にする
            setTimeout(() => setShowTooLongBodyBanner(false), 2000);
        } else {
            // バックエンドにフォームデータを送信
            post('/store', data).then(() => {
            // フォーム送信成功後にフォームデータをリセット
            setData({
                parent_post_id: parent_post_id,
                body: "",
                images: [],
            });
        });
        }
    };
   
    return (
        <div className="">
          <form onSubmit={handleSendPosts} encType="multipart/form-data">
            <div className="w-[100%] bg-neutral-100 px-10 py-1 border-t border-b border-gray-300 relative">
              {/* 以下のバナー要素は「送信」と「img」の間に表示されます */}
              {showEmptyBodyBanner && (
                <div className="bg-sky-500 text-white p-2 mb-4 absolute" style={{ marginTop: '20px' }}>
                  本文を入力してください.
                </div>
              )}
              {showTooLongBodyBanner && (
                <div className="bg-sky-500 text-white p-2 mb-4 absolute" style={{ marginTop: '20px' }}>
                  本文は200文字以内で入力してください.
                </div>
              )}
              {showTooManyImagesBanner && (
                <div className="bg-sky-500 text-white p-2 mb-4 absolute" style={{ marginTop: '20px' }}>
                  写真は4枚までしか投稿できません.
                </div>
              )}
              
              {/* 以下は「送信」と「img」の部分です */}
              <div class="flex">
                <div className="mt-5 flex items-center"><img src={props.profileImage} className="w-[35px] mr-1"/></div>
                <textarea
                  placeholder="投稿する"
                  className="w-full h-[50px] mt-5 border-none focus:ring-0 bg-neutral-100 rounded-md"
                  onChange={handleTextareaChange}
                  value={data.body}
                />
              </div>
              {data.images.length > 0 && (
                            <div className="mt-10">
                                <div className="grid gap-5 grid-cols-2 w-full mt-5">
                                {data.images.map((file, index) => (
                                    <img
                                        key={index}
                                        src={URL.createObjectURL(file)}
                                        alt={`Image Preview ${index}`}
                                        className="w-full rounded-xl"
                                    />
                                ))}
                                </div>
                            </div>
                        )}
                        <div className="flex justify-between items-center border-t border-gray-300 py-1">
                            <label htmlFor="images" className="cursor-pointer px-5 block font-bold text-sm"><img src="../img/image2.png" className="w-[25px]"/>img</label>
                            <input type="file" id="images" onChange={handleFileChange} accept="image/*" multiple />
                            <button className="flex items-center border border-gray-400 p-1 rounded-md"><img src="../img/post.png" className="w-[20px] mr-1" /><p className="font-bold">送信</p></button>
                        </div>
            </div>
          </form>
        </div>
    );
}
export default ChildCreate;
