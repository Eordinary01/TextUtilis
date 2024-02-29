import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle]= useState({

  //     color:'black',
  //     backgroundColor:'white'
  // })

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "black" : "white",
  };

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-3 ">About Us</h2>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> Analyze Your Text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              This app gives you a way to enhance your text quality.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong> Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              This is an free counter tool,that provide instant solution of your
              problem.Maintain the dignity of your text with TEXTUTILIS
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              This works in every browser and has abilty to count every type of
              document.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
