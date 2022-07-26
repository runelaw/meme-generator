import React from "react";
import "./main.styles.css";

import Form from "../form/form.component.jsx";
import Button from "../button/button.component";
import Meme from "../meme/meme.component.jsx";

const Main = () => {
  const [meme, setMeme] = React.useState({
    upperText: "",
    lowerText: "",
    randomImage: "",
  });

  const [memesData, setMemesData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((mData) => setMemesData(mData.data.memes));
  }, []);

  
  
  return (
    <main className="main">
      <Form meme={meme} setMeme={setMeme} />
      <Button memesData={memesData} setMeme={setMeme} />
      <Meme meme={meme} />
    </main>
  );
};

export default Main;
