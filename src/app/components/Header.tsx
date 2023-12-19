import CountDownClock from "./CountDownClock";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col items-center w-full gap-3 p-6 text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      <span className="text-4xl font-bold">Faltam</span>
      <CountDownClock />
      <span className="text-4xl font-bold">para o ano novo!</span>
    </div>
  );
}
