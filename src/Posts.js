import React from 'react';
import Post from './Post';

function Posts(props) {
    const posts = props.posts.map((post) => {
        return (
            <Post title={post.title} date={post.date} content={post.content} />
        )
    });
    console.log("🏔", posts)

    return (
        <div className="posts">
            {posts}
        </div>
    )
}

export default Posts;