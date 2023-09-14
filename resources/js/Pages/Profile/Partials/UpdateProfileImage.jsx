import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
const UpdateProfileImage = (props) => {
    const { profileImage, auth } = props
    // フォームデータを初期化
    const { data, setData, post } = useForm({
        image: null, // 画像ファイルを複数のファイルとして管理するための配列
    });
    // プレビュー用のステートを初期化
    const [imagePreview, setImagePreview] = useState(null);
     // 画像ファイルが選択されたときの処理
    const handleFileChange = (e) => {
        const image = e.target.file;
        // プレビューを表示
        let preview = null;
            const reader = new FileReader();
            reader.onload = (e) => {
                preview = e.target.result;
                //プレビューを更新
                setImagePreview(preview);
                reader.readAsDataURL(image);
            }
        // フォームデータに選択した画像を追加
        setData('image', image);
    };
        console.log(props);
        console.log(auth.user);
    return (
        <>
            <input type="file" id="image" onChange={handleFileChange} accept="image/*" multiple />

            <div className="mt-10">
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
                            src={URL.createObjectURL(file)}
                            alt="Profile Image Image Preview"
                            className="w-full rounded-xl"
                        />
                    </div>
                )
            }
            </div>
        </>
    );
}
export default UpdateProfileImage