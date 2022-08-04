import React from "react";
import "./index.scss";
import TextBox from "./components/TextBox";
import ContentBox from "./components/ContentBox";

export default function App() {
  return (
    <main className="container">
      <ContentBox />
      <TextBox />
    </main>
  );
}
