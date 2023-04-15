import React from "react";

function VideoClip ({url, title}) {
    return (
        <iframe 
            width="919"
            height="525"
            src={url}
            frameBorder="0"
            allowFullScreen
            title={title}
        />
    );
    
}

export default VideoClip;

