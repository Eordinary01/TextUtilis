import React, { useState } from "react";

// Hooks help to use class features without making it..

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked," + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClear = ()=>{
    let newText = ' ';
    setText(newText);
  }
  const copyText = ()=>{
    navigator.clipboard.writeText(text);
  }
  
  const handleonChange = (event) => {
    // console.log("On change  ")
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");

  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-success mx-2" onClick={copyText}>
          COPY
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
