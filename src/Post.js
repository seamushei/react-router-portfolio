import React from 'react';

function Post(props) {
    console.log("👍 the title is", props.title, props)
    return (
        <div className="post">
            <h2>{props.title}</h2>
            <p class="date">{props.date}</p>
            <p>{props.content}</p>
        </div>
    )
}

export default Post;