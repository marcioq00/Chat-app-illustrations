import React from "react";
import "..//index.scss";
export default function TextBox() {
  return (
    <div className="text-box">
      <BackgroundGray />
      <TextBoxHeader />
    </div>
  );
}
function BackgroundGray() {
  return <div className="background-gray"></div>;
}

function TextBoxHeader() {
  return (
    <header id="text-box__header">
      <HeaderHeading />
      <HeaderText />
    </header>
  );
}

function HeaderHeading() {
  return <h1 className="header__heading">Simple booking</h1>;
}

function HeaderText() {
  return (
    <p className="header__text">
      Stay in touch with our dog walkers through the chat interface. This makes
      it easy to discuss arrangements and make bookings. Once the walk has been
      completed you can rate your walker and book again all through the chat.
    </p>
  );
}
