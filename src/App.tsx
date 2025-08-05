"use client";

import "./App.css";
import Sticker from "./StickerUploader";
import Example from "./Content";
import Hero from "./Hero";
import Nav from "./Nav";
//import Content from './Example'

export default function App() {
  return (
    <>
      <Nav />
      <body className="pt-40 mx-124 flex justify-center">
        <Hero />
        <Sticker />
        <Example />
      </body>
    </>
  );
}
