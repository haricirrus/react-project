import React, { useState } from "react";

import "./main.css";

const Main = () => {
  const [text, SetText] = useState(false);
  const clickHandler=()=>{
    SetText(!text);
  }

  return (
    <div className="main">
      <h2>Furniture review</h2>
      <div className="container">
        <div className="left-container">
          <img
            className="banner-img"
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          ></img>
        </div>
        <div className="right-container">
          <p className="blog">
            Welcome to our blog where we help you with day to day furniture
            care, discuss design ideas and latest trends, and speak about the
            latest design trends. We also discuss how the right decision for
            buying furniture can lead to an overall improvement in your
            lifestyle and ofcourse, make your home look beautiful. We focus on
            furniture for all rooms of your home from bedroom, dining room to
            office as well as mattresses and accents. We are sure you will enjoy
            reading our blog.
          </p>
         {text && ( <p className="blog">
            Welcome to our blog where we help you with day to day furniture
            care, discuss design ideas and latest trends, and speak about the
            latest design trends. We also discuss how the right decision for
            buying furniture can lead to an overall improvement in your
            lifestyle and ofcourse, make your home look beautiful. We focus on
            furniture for all rooms of your home from bedroom, dining room to
            office as well as mattresses and accents. We are sure you will enjoy
            reading our blog.
          </p>)}
        </div>
        
      </div>
      <button onClick={clickHandler}>{text?<p>see less..</p>:<p>see more..</p>}</button>
    </div>
  );
};

export default Main;
