import React from "react";
import "./Waveanimation.css";

export default function Waveanimation({ isPlaying }) {
  const waveclass = isPlaying ? "box active" : "box";

  return (
    <div className="box-container flex">
      <div className={`${waveclass} box1`}></div>
      <div className={`${waveclass} box2`}></div>
      <div className={`${waveclass} box3`}></div>
      <div className={`${waveclass} box4`}></div>
      <div className={`${waveclass} box5`}></div>
      <div className={`${waveclass} box6`}></div>
      <div className={`${waveclass} box7`}></div>
      <div className={`${waveclass} box2`}></div>
      <div className={`${waveclass} box3`}></div>
      <div className={`${waveclass} box4`}></div>
      <div className={`${waveclass} box5`}></div>
      <div className={`${waveclass} box6`}></div>
      <div className={`${waveclass} box7`}></div>
    </div>
  );
}