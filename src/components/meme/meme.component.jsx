import React from "react";
import "./meme.styles.css";

const Meme = (props) => {
  return (
    <div className="meme">
      <img src={props.meme.randomImage} alt="meme" className="meme--image" />
      <h2 className="meme--text top">{props.meme.upperText}</h2>
      <h2 className="meme--text bottom">{props.meme.lowerText}</h2>
    </div>
  );
};

export default Meme;
