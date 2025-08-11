"use client";

import "./../App.css";
import Sticker from "../sections/StickerUploader";
import Example from "../sections/Content";
import Hero from "../sections/Hero";
//import Content from './Example'

export default function Home() {
  return (
    <>
      <div className="pt-32 max-x-[1200px]">
        <Hero />
        <Sticker />
        <Example />
      </div>
    </>
  );
}
