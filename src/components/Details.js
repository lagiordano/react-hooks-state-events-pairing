import React, {useState} from "react";

function Details ({video, onHideClick, areHidden}) {
    const upvotes = video.upvotes;
    const downvotes = video.downvotes;

    const [likes, setLikes] = useState(upvotes);
    const [dislikes, setDislikes] = useState(downvotes);

    function handleLikeClick () {
        setLikes(likes => likes + 1);
    }

    function handleDislikeClick () {
        setDislikes(dislikes => dislikes + 1);
    }

    return (
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <div>
                <button onClick={handleLikeClick}>👍 {likes}</button><button onClick={handleDislikeClick}>👎 {dislikes}</button>
            </div><br/>
            <button onClick={onHideClick}>{areHidden ? "Show Comments" : "Hide Comments"}</button>
        </div>
    );
}

export default Details;