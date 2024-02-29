import React, { useState } from "react";

// Hooks help to use class features without making it..

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked," + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!","success");
  }
  const handleClear = () => {
    let newText = ' ';
    setText(newText)
    props.showAlert("Text has been cleared", "success");
  }
  

  const handleonChange = (event) => {
    // console.log("On change  ")
    setText(event.target.value);
  };

  const handleCopy = ()=>{
    console.log("I am copy");
     var text = document.getElementById("myBox");
     text.select();
     text.setSelectionRange(0,9999);
     navigator.clipboard.writeText(text.value);
     props.showAlert("Copied to clipboard", "success");
  }
  const [text, setText] = useState(" ");

  return (
    <>
      <div className="container"   style={{color: props.mode === 'dark' ?  'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{backgroundColor: props.mode === 'dark' ?  'black':'white', color: props.mode === 'dark' ?  'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-success mx-3 my-2" onClick={handleCopy}>
          COPY
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ?  'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textarea to preview it here! "}</p>
      </div>
    </>
  );
}
