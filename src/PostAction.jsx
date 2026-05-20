
 export const PostAction = ({likes, setLikes,}) =>{
    return(
        <div>
            <button onClick={()=> setLikes(likes + 1)}>
                Likes ({likes})

            </button>
        </div>
    )
 }