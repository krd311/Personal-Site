import React from 'react';
import "./styles/welcome.css"
import background from "./images/background.jpg"

export const Welcome = () => {
  return <div>
        <img src={background} class="welcome-picture"></img>
        <div class="container-text">Welcome to my personal site!</div>
  </div>;
};

export default Welcome