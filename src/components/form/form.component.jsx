import React from "react";
import "./form.styles.css";

const Form = (props) => {
  function handleChange(event) {
    const { name, value } = event.target;

    props.setMeme((prevMeme) => {
      return { ...prevMeme, [name]: value };
    });
  }

  return (
    <div className="form">
      <input
        type="text"
        name="upperText"
        value={props.meme.upperText}
        onChange={handleChange}
        placeholder="Top Text"
        className="input"
      />
      <input
        type="text"
        name="lowerText"
        value={props.meme.lowerText}
        onChange={handleChange}
        placeholder="Bottom Text"
        className="input"
      />
    </div>
  );
};

export default Form;
