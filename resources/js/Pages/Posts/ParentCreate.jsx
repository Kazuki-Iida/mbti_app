import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';

const ParentCreate = (props) => {
    // フォームデータを初期化
    const { data, setData, post } = useForm({
        body: "",
        images: [] // ファイルを配列として管理
    });

    // プレビュー用のステートを初期化
    const [imagePreviews, setImagePreviews] = useState([]);
    
    // プレビュー制限用のステート
    const [showLimitBanner, setShowLimitBanner] = useState(false);
    
    // 本文空白のバナー表示用ステート
    const [showEmptyBodyBanner, setShowEmptyBodyBanner] = useState(false);
    
    // 本文文字数制限のバナー表示用ステート
    const [showTooLongBodyBanner, setShowTooLongBodyBanner] = useState(false);

    // ファイルが選択されたときの処理
    const handleFileChange = (e) => {
        const files = e.target.files;
        const imagesArray = Array.from(files);

        // 4枚を超える場合は選択を制限
        if (imagesArray.length > 4) {
            setShowLimitBanner(true);
            return;
        }

        setData('images', imagesArray);
        setShowLimitBanner(false); // 制限バナーを非表示

        // プレビューを表示
        const previews = [];
        for (let i = 0; i < imagesArray.length; i++) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previews.push(e.target.result);
                // すべてのプレビューを更新
                if (previews.length === imagesArray.length) {
                    setImagePreviews(previews);
                }
            };
            reader.readAsDataURL(imagesArray[i]);
        }
    };

    // フォームを送信する処理
    const handleSendPosts = (e) => {
        e.preventDefault();

        // フォームデータを作成
        const formData = new FormData();

        // 画像ファイルを追加
        data.images.forEach((image, index) => {
            formData.append(`images[${index}]`, image);
        });

        // bodyの文字数チェック
        if (data.body.length === 0) {
            // バナーを表示または処理を中断
            // バナーを表示するステートを設定
            setShowEmptyBodyBanner(true);
            return; // フォーム送信を中断
        } else if (data.body.length > 200) {
            // バナーを表示または処理を中断
            // バナーを表示するステートを設定
            setShowTooLongBodyBanner(true);
            return; // フォーム送信を中断
        }

        // バックエンドにフォームデータを送信
        post('/store', formData);
    };

    return (
        <div className="p-12">
            {showLimitBanner && (
                <div className="bg-red-500 text-white p-2 mb-4">
                    最大4枚までしか選択できません。
                </div>
            )}

            {/* bodyの文字数が0の場合に表示 */}
            {showEmptyBodyBanner && (
                <div className="bg-red-500 text-white p-2 mb-4">
                    本文を入力してください。
                </div>
            )}

            {/* bodyの文字数が200以上の場合に表示 */}
            {showTooLongBodyBanner && (
                <div className="bg-red-500 text-white p-2 mb-4">
                    本文は200文字以内で入力してください。
                </div>
            )}

            <form onSubmit={handleSendPosts} encType="multipart/form-data">
                <div>
                    <h2>本文</h2>
                    <textarea placeholder="今日も1日お疲れさまでした。" onChange={(e) => setData("body", e.target.value)}></textarea>
                    <span className="text-red-600">{props.errors.body}</span>
                </div>
                <div>
                    <label className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                        
                        <input
                            type="file"
                            className="hidden"
                            multiple
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                    </label>
                </div>
                {imagePreviews.length > 0 && (
                    <div>
                        <h2>プレビュー</h2>
                        {imagePreviews.map((preview, index) => (
                            <img
                                key={index}
                                src={preview}
                                alt={`Image Preview ${index}`}
                                className="max-w-xs mt-2"
                            />
                        ))}
                    </div>
                )}
                <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">送信</button>
            </form>
            <Link href="/">戻る</Link>
        </div>
    );
}

export default ParentCreate;
