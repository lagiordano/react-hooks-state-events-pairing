import React from "react";

function Comment ({user, text}) {

    return (

        <div>
            <h4>{user}</h4>
            <p>{text}</p>
        </div>
    );
}

export default Comment;