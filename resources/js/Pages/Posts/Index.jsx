import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Index = (props) => {
    const { posts } = props; 
    console.log(props); 

    return (
        <>
        <Link href="/posts/parent/create">投稿作成</Link>
            
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
