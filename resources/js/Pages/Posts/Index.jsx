import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Index = (props) => {
    const { posts } = props; 
    console.log(props); 

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
