import React from "react";
import "./share.css";
import { EmojiEmotions, Label, PermMedia, Room  /*taken from material ui */} from "@mui/icons-material";

const Share = () => {
  return (
    /* this is top portion of Feed */
    <div className="share">
      <div className="sharewrapper">
        <div className="shareTop" >
      
          <img className="shareprofileimg" src = "data:image/png;base64,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"  alt="error" />
            <input placeholder="whats in your mind" className="shareinput" / /* here we can post something*/>
          </div>
          <hr className="sharehr" /* line below post portion  *//>
        </div>
        <div className="shareBottom" /* Bottom portion of Share component*/>
          <div className="shareoptions">
            <div className="shareoption">
              <PermMedia htmlColor="tomato" className="shareoptionicon"  /* taken from material icons *//>
              <span className="shareoptiontext">photos or videos</span>
            </div>

            <div className="shareoption">
              <Room htmlColor="blue" className="shareoptionicon" /*taken from material icons and this is for location *//>
              <span className="shareoptiontext">Location</span>
            </div>

            <div className="shareoption">
              <Label htmlColor="Green" className="shareoptionicon" /  /* this is for to tag friends in post*/>
              <span className="shareoptiontext">Tag </span>
            </div>
            <div className="shareoption">
              <EmojiEmotions htmlColor="goldenrod" className="shareoptionicon" / /* this is for feelings and taken from material icons */>
              <span className="shareoptiontext">Feelings</span>
            </div>
        
          </div>
         <button className="sharebutton"  /* share button taken from material ui  */>Share </button>
        </div>
      </div>
    
  );
};

export default Share;
