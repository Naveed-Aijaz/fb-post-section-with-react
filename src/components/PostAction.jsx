import { IoMdThumbsUp } from "react-icons/io";
import { MdComment } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";

import "./Post.scss"


 export const PostAction = ({likes, setLikes,}) =>{
    return(
        <div className="post-actiion">
            {/* like btn */}
            <button onClick={()=> setLikes(likes + 1)}>
               <IoMdThumbsUp/> Likes ({likes})
            </button>

            {/* comment btn */}

            <button onClick={()=> alert ("Comment Clicked") }>
               <MdComment/>   comment
            </button>

            {/* share btn */}

            <button onClick={()=> alert("Share Clicked")}>
              <IoShareSocial/>  Share
            </button>

        </div>
    )
 }





 