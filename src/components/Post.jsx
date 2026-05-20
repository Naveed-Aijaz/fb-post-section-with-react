 import { PostAction } from "./PostAction"

import { useState } from "react";
import "./post.scss";


export const Post = (props) => {

    const [likes, setLikes] = useState(0);
    return (
        <div className="post-card">
            {props.image && (
                <img src={props.image} alt="post" className="post-image" />
            )}



            <div className="post-body">
                <h1 className="post-title">{props.title}</h1>
                <p className="post-desc">{props.desc}</p>
                <PostAction likes={likes} setLikes={setLikes} />
            </div>
        </div>
    );
};


 