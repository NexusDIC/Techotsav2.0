// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date("March 22, 2025 10:00:00 GMT+0530");
    const now = new Date();
    let difference = targetDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="hero w-full h-full flex flex-col items-center justify-center">
      <h3>Time Left Till Event : </h3>
      <p className="select-none text-4xl font-bold bg-gradient-to-r from-[#F3DE8A] via-[#B0E0E6] to-[#71C73B] to-[#FF5A36] inline-block text-transparent bg-clip-text">
        {days !== undefined ? `${days}:` : ""}
        {hours !== undefined ? `${hours.toString().padStart(2, "0")}:` : "00:"}
        {minutes !== undefined
          ? `${minutes.toString().padStart(2, "0")}:`
          : "00:"}
        {seconds !== undefined ? seconds.toString().padStart(2, "0") : "00"}
      </p>
    </div>
  );
}
