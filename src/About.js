import React from 'react';

function About(props) {
    return (
        <div className="home">
            <img src="http://www.placekitten.com/200/400" />
            <div>
                <h2>About me</h2>
                <p>{props.info}</p>
                <h3>Contact</h3>
                <ul>
                    <li>don't call</li>
                    <li>don't write</li>
                    <li>Send a raven ✅</li>
                </ul>
            </div>
        </div>
    )
}

export default About;