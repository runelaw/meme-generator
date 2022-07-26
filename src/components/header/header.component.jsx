import React from "react";
import image from "../../images/Troll Face.png";
import image2 from "../../images/Meme Generator.png";
import "./header.styles.css";

const Header = () => {
  return (
    <header className="header">
      <img src={image} alt="face" className="logo" />
      <img src={image2} alt="gen" className="heading" />
      <h4 className="project">React Course- Project 3</h4>
    </header>
  );
};

export default Header;
