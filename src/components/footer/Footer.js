import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Make world on next step.")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          I am here{" "}
          <a
            href="hhttps://github.com/IanJ332"
            target="_blank"
            rel="noreferrer"
          >
            IanJ332
          </a>
        </p>
      </div>
    </Fade>
  );
}
