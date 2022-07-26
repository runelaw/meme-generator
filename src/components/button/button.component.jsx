import React from "react";
import "./button.styles.css";
import image from "../../images/Get a new meme image.png";

const Button = (props) => {
  function getMemeImage() {
    const memesArray = props.memesData;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    props.setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  return (
    <button className="button" onClick={getMemeImage}>
      <img src={image} alt="pic" className="btn-text" />
    </button>
  );
};

export default Button;
