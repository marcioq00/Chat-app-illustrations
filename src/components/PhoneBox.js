import React from "react";
import "..//index.scss";
import DogOne from "../image/dog-image-1.jpg";
import DogTwo from "../image/dog-image-2.jpg";
import DogThree from "../image/dog-image-3.jpg";
import Chevron from "../image/icons8-chevron-right-30.png";
import Man from "../image/avatar.jpg";
import ChevronLeft from "../image/icons8-chevron-left-24.png";

export default function PhoneBox() {
  return (
    <div className="content-box__phone">
      <div className="phone__background">
        <PhoneHeading />
        <PhoneChat />
      </div>
    </div>
  );
}
function PhoneHeading() {
  return (
    <div className="phone__heading">
      <PhoneDivWhite />
      <PhoneHeadingInformation />
    </div>
  );
}
function PhoneDivWhite() {
  return <div className="phone__div__white"></div>;
}
function PhoneHeadingInformation() {
  return (
    <div className="phone__heading__information">
      <PhoneHeadingChevron />
      <PhoneHeadingAvatar />
      <PhoneHeadingStatus />
      <PhoneHeadingMenu />
    </div>
  );
}
function PhoneHeadingChevron() {
  return (
    <div className="phone__heading__chevron">
      <img src={ChevronLeft} alt="chevron left"></img>
    </div>
  );
}
function PhoneHeadingAvatar() {
  return (
    <div className="phone__heading__avatar">
      <img src={Man} alt="avatar"></img>
    </div>
  );
}
function PhoneHeadingStatus() {
  return (
    <div className="phone__heading__status">
      <span>Samuel Green</span>
      <span>Available to Walk</span>
    </div>
  );
}
function PhoneHeadingMenu() {
  return (
    <div className="phone__heading__menu">
      <span className="phone__heading__menu__dot">.</span>
      <span className="phone__heading__menu__dot">.</span>
      <span className="phone__heading__menu__dot">.</span>
    </div>
  );
}
function PhoneChat() {
  return (
    <div className="phone__chat">
      <PhoneChatHost />
      <PhoneChatGuest />
      <PhoneChatHostSecond />
      <PhoneChatButton />
    </div>
  );
}
function PhoneChatHost() {
  return (
    <div className="phone__chat__host">
      <div className="host__message__first">
        That sounds great. I’d be happy with that.
      </div>
      <div className="host__message__second">
        Could you send over some pictures of your dog, please?
      </div>
    </div>
  );
}
function PhoneChatGuest() {
  return (
    <div className="phone__chat__guest">
      <GuestImages />
      <div className="align-items-right">
        <div className="guest__message__first">
          Here are a few pictures. She’s a happy girl!
        </div>
      </div>
      <div className="align-items-right">
        <div className="guest__message__second"> Can you make it?</div>
      </div>
    </div>
  );
}
function PhoneChatHostSecond() {
  return (
    <div className="phone__chat__host__second">
      <div className="host__second__message">
        She looks so happy! The time we discussed works. How long shall I take
        her out for?
      </div>
      <HostOfertFirst />
      <HostOfertSecond />
    </div>
  );
}
function HostOfertFirst() {
  return (
    <div className="host__ofert__first">
      <div className="circle"></div>
      <span className="host__ofert__first__message">30 minute walk</span>
      <span className="host__ofert__first__price">$29</span>
    </div>
  );
}
function HostOfertSecond() {
  return (
    <div className="host__ofert__second">
      <div className="circle"></div>
      <span className="host__ofert__second__message">1 hour walk</span>
      <span className="host__ofert__second__price">$49</span>
    </div>
  );
}
function GuestImages() {
  return (
    <div className="align-items-right">
      <div className="phone__chat__guest__images">
        <img
          src={DogOne}
          alt="Happy dog"
          className="phone__chat__guest__images--image"
        ></img>
        <img
          src={DogTwo}
          alt="Happy dog on sand"
          className="phone__chat__guest__images--image"
        ></img>
        <img
          src={DogThree}
          alt="Dog with stick"
          className="phone__chat__guest__images--image"
        ></img>
      </div>
    </div>
  );
}
function PhoneChatButton() {
  return (
    <div className="phone__chat__button">
      <input
        type="text"
        placeholder="Type a message..."
        aria-placeholder="Type a message..."
        className="phone__chat__button--primary"
      ></input>
      <button className="phone__chat__button--chevron">
        <img src={Chevron} alt="chevron icon"></img>
      </button>
    </div>
  );
}

window.addEventListener("resize", function () {
  const message = this.document.querySelector(".host__message__first");
  const width = document.querySelector("body").offsetWidth;
  if (width < 800) {
    message.textContent = "That sounds great. I'd be happy to discuss more.";
  } else {
    message.textContent = " That sounds great. I’d be happy with that.";
  }
});
