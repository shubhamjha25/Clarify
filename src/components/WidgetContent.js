import React from "react";
import "./WidgetContent.css";

function WidgetContent() {
  return (
    <div className="widget__contents">
      <div className="widget__content">
        <img
          src="https://avatars.githubusercontent.com/u/63443481?v=4"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5><a style={{textDecoration:"none"}} href="https://shubhamjha25.github.io" target="_blank">SHUBHAM JHA</a></h5>
          <p>Full Stack Web Developer</p>
          <div className="social-icons">
                <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"></img>
                <a href="https://github.com/shubhamjha25" target="_blank"><img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-128.png"></img></a>
                <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-256.png"></img>
          </div>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://avatars.githubusercontent.com/u/71643172?v=4"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>SHUBHAM KUMAR CHOUBEY</h5>
          <p>Passionate Coder</p>
          <div className="social-icons">
                <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"></img>
                <a href="https://github.com/ishubham010" target="_blank"><img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-128.png"></img></a>
                <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-256.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
