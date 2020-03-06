import React from 'react';
import Posts from './Posts';

function Blog(props) {

    return (
        <div className="home">
            <img src="http://www.placekitten.com/200/500" />
            <div>
                <h2>This my blog</h2>
                <Posts posts={props.posts}></Posts>
            </div>
        </div>
    )
}

export default Blog;