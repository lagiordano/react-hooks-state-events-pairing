import React, {useState} from "react";
import VideoClip from "./VideoClip.js";
import Details from "./Details.js";
import CommentList from "./CommentList.js";
import video from "../data/video.js";


function App() {

  console.log("Here's your data:", video)

  const [areHidden, setAreHidden] = useState(false);

  function handleHideClick () {
    setAreHidden(!areHidden);
  }

  

  return (
   
    <div className="App">
      <VideoClip url={video.embedUrl} title={video.title} />
      <Details video={video} onHideClick={handleHideClick} areHidden={areHidden}/>
      <CommentList comments={video.comments} areHidden={areHidden}/>
      
    </div>
  );
}

export default App;
