import React from "react";
import Comment from "./Comment";

function CommentList ({comments, areHidden}) {

    

    const commentElements = comments.map(item => {
        return <Comment user={item.user} text={item.comment} key={item.id} />
    })

    // console.log(commentElements);

    

   return (
    <div>
        <h2>{comments.length} Comments</h2>
        {areHidden ? null : commentElements}
    </div>
   )

}

export default CommentList;