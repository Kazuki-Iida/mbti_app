import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
const UpdateProfileImage = (props) => {
    const { profileImage, auth } = props
    // フォームデータを初期化
    const { data, setData, patch } = useForm({

        image: null, // 画像ファイルを複数のファイルとして管理するための配列
    });
    // プレビュー用のステートを初期化
    const [imagePreview, setImagePreview] = useState(null);
     // 画像ファイルが選択されたときの処理
    const handleFileChange = (e) => {

        const image = e.target.files;

        // プレビューを表示
        let preview = null;
            const reader = new FileReader();
            reader.onload = (e) => {
                preview = e.target.result;
                //プレビューを更新
                setImagePreview(preview);

                reader.readAsDataURL(image[0]);
            }
        // フォームデータに選択した画像を追加
        setData('image', image[0]);
    };
    
    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
            formData.append('image', data.image);
        
            patch(route('profile.image.update'), formData);
    };
        console.log("auth.user", auth.user);
        console.log('image', data.image);
    return (
        <>
            <form onSubmit={submit} className="space-y-6" enctype="multipart/form-data">
                <label htmlFor="image" className="cursor-pointer px-5 block font-bold text-sm">
                    <div className="">
                    {data.image === null ? (
                            <div className="w-full mt-5">
                                <img
                                    src={auth.user.image_path}
                                    alt="Profile Image Image Preview"
                                    className="w-full rounded-xl"
                                />
                            </div>
                        ) : (
                            <div className="w-full mt-5">
                                <img
                                    src={URL.createObjectURL(data.image)}
                                    alt="Profile Image Image Preview"
                                    className="w-full rounded-xl"
                                />
                            </div>
                        )
                    }
                    </div>
                </label>
                <input type="file" id="image" onChange={handleFileChange} accept="image/*" />
                <button className="flex items-center border border-gray-400 p-1 rounded-md"><img src="img/post.png" className="w-[20px] mr-1" /><p className="font-bold">送信</p></button>
            </form>

        </>
    );
}
export default UpdateProfileImage