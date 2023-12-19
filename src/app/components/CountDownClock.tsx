"use client";

import Countdown from "react-countdown";
import React from "react";
export default function CountDownClock() {
  // Random component
  const Completionist = () => <span>Feliz ano novo!</span>;

  // Renderer callback with condition
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="w-fit grid grid-cols-4 gap-2">
          <div className="bg-white text-black flex-1 font-bold p-6 shadow-xl rounded-md flex flex-col justify-center items-center gap-2">
            <span>Dias</span>
            <span>{days}</span>
          </div>
          <div className="bg-white text-black flex-1 font-bold p-6 shadow-xl rounded-md flex flex-col justify-center items-center gap-2">
            <span>Horas</span>
            <span>{hours}</span>
          </div>
          <div className="bg-white text-black flex-1 font-bold p-6 shadow-xl rounded-md flex flex-col justify-center items-center gap-2">
            <span>Minutos</span>
            <span>{minutes}</span>
          </div>
          <div className="bg-white text-black flex-1 font-bold p-6 shadow-xl rounded-md flex flex-col justify-center items-center gap-2">
            <span>Segundos</span>
            <span>{seconds}</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Countdown
        renderer={renderer}
        date={new Date("December 31, 2023 23:59:59")}
      />
    </div>
  );
}
