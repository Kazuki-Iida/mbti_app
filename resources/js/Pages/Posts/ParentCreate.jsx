import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
const ParentCreate = (props) => {
    // フォームデータを初期化
    const { data, setData, post } = useForm({
        body: "",
        images: [], // 画像ファイルを複数のファイルとして管理するための配列
    });
    // プレビュー用のステートを初期化
    const [imagePreview, setImagePreview] = useState(null);
    // 本文空白のバナー表示用ステート
    const [showEmptyBodyBanner, setShowEmptyBodyBanner] = useState(false);
    const [showTooLongBodyBanner, setShowTooLongBodyBanner] = useState(false);
     const handleTextareaChange = (e) => {
        const inputValue = e.target.value;
        setData('body', inputValue);
      };
      const formatText = (text) => {
        // #からスペースまでのテキストを青く表示
        const formattedText = text.replace(/(#\S+)/g, '<span style="color: blue;">$1</span>');
        // HTMLを解釈する
        return { __html: formattedText };
      };
    // フォームの高さスタイルを制御するステート
    const [formHeight, setFormHeight] = useState('auto');
    // 画像ファイルが選択されたときの処理
    // 画像ファイルが選択されたときの処理
        const handleFileChange = (e) => {
            const files = e.target.files;
            const imagesArray = Array.from(files);
            // 4枚を超える場合は選択を制限
            if (imagesArray.length + data.images.length > 4) {
                setShowTooManyImagesBanner(true);
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
    const [showTooManyImagesBanner, setShowTooManyImagesBanner] = useState(false);
    // フォームを送信する処理
    const handleSendPosts = (e) => {
        e.preventDefault();
        // フォームの高さを通常の高さに戻す
        setFormHeight('auto');
        // 本文の文字数をチェック
        if (data.body.length === 0) {
            // 本文が空の場合、エラーバナーを表示
            setShowEmptyBodyBanner(true);
        } else if (data.body.length > 200) {
            // 本文が200文字を超える場合、エラーバナーを表示
            setShowTooLongBodyBanner(true);
        } else if (data.images.length > 4) {
            // 画像が4枚以上の場合、エラーバナーを表示
           setShowTooManyImagesBanner(true);
        } else {
            // バックエンドにフォームデータを送信
            post('/store', data);
        }
    };
    return (
        <div className="p-12">

            <form onSubmit={handleSendPosts} encType="multipart/form-data" style={{ height: formHeight }}>
            
                <div className="w-[39%] bg-neutral-100 p-10 border-l border-gray-300 fixed right-0 z-0 h-screen overflow-scroll">
                    {/* bodyの文字数が0の場合に表示 */}

                    {showEmptyBodyBanner && (
                        <div className="bg-sky-500 text-white p-2 mb-4 absolute" style={{ marginTop: '20px' }}>
                            本文を入力してください。
                        </div>
                    )}
                    {showTooLongBodyBanner && (
                        <div className="bg-sky-500 text-white p-2 mb-4 absolute" style={{ marginTop: '20px' }}>
                            本文は200文字以内で入力してください。
                        </div>
                    )}
                    <div className="">
                        <div className="mt-20 flex items-center"><img src="img/pen.png" className="w-[35px] mr-1"/><img src="img/post.png" className="w-[20px] mr-1"/><p className="font-bold">投稿する</p></div>

                        <textarea
                            placeholder="投稿する"
                            className="w-full h-[150px] mt-5 border-none focus:ring-0 bg-neutral-100 rounded-md"
                            onChange={handleTextareaChange}
                            value={data.body}
                        />
                        <div className="mt-2" dangerouslySetInnerHTML={formatText(data.body)}></div>
                        <div className="flex justify-between items-center border-t border-gray-300 py-5">
                            <label htmlFor="images" className="cursor-pointer px-5 block font-bold text-sm"><img src="img/image.png" className="w-[25px]"/>img</label>
                            <input type="file" id="images" onChange={handleFileChange} accept="image/*" multiple />
                        </div>
                        <div className="fixed bottom-50 right-10">
                            <button className="flex items-center border border-gray-400 p-1 rounded-md"><img src="img/post.png" className="w-[20px] mr-1" /><p className="font-bold">送信</p></button>
                        </div>
                    </div>

                    {data.images.length > 0 && (
                        <div className="mt-10">
                            <div className="grid gap-5 grid-cols-2 w-full mt-5">
                            {data.images.map((file, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(file)}
                                    alt={`Image Preview ${index}`}
                                    className="max-w-xs mt-2 block w-full"
                                />
                            ))}
                            </div>
                        </div>
                    )}
                        <div className="flex justify-between items-center border-t border-gray-300 py-5">
                            <label htmlFor="images" className="cursor-pointer px-5 block font-bold text-sm"><img src="../img/image2.png" className="w-[25px]"/>img</label>
                            <input type="file" id="images" onChange={handleFileChange} accept="image/*" multiple />
                            <button className="flex items-center border border-gray-400 p-1 rounded-md block"><img src="img/post.png" className="w-[20px] mr-1" /><p className="font-bold">送信</p></button>
                        </div>
                    </div>

                    {/* 送信ボタンを固定位置に配置 */}
                    {/*<div className="fixed bottom-50 right-10">
                        <button className="flex items-center border border-gray-400 p-1 rounded-md block"><img src="img/post.png" className="w-[20px] mr-1" /><p className="font-bold">送信</p></button>
                    </div>
                    */}
                </div>
            </form>
        </div>
    );
}
export default ParentCreate;