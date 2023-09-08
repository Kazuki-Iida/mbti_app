import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Index = (props) => {
    const { posts } = props; // 追加
    console.log(props); // 確認用に追加

    return (
        <>
            
            <div className="p-12">
                <h1>Blog Name</h1>

                { posts.map((post) => (
                    <div key={post.id}>
                        <p>{ post.body }</p>
                    </div>
                )) }
            </div>
            
        </>
        );
}

export default Index;
