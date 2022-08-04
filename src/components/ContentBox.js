import React from "react";
import "..//index.scss";
import PhoneBox from "./PhoneBox";

export default function ContentBox() {
  return (
    <div className="content-box">
      <BackgroundViolet />
      <PhoneBox />
    </div>
  );
}

function BackgroundViolet() {
  return <div className="background-violet">violet</div>;
}
