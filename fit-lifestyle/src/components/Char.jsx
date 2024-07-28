import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Char = () => {
  const targetCalories = 1900;
  const targetPercentage = 85;

  const [calories, setCalories] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const duration = 1500;

    let start = 0;
    const increment = targetCalories / (duration / 10);

    const animate = () => {
      start += increment;
      if (start >= targetCalories) {
        setCalories(targetCalories);
        setPercentage(targetPercentage);
      } else {
        setCalories(Math.floor(start));
        setPercentage(Math.floor((start / targetCalories) * 100));
        setTimeout(animate, 10);
      }
    };

    animate();
  }, [targetCalories, targetPercentage]);

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-28">
        <CircularProgressbar
          value={percentage}
          strokeWidth={10}
          styles={buildStyles({
            textSize: "16px",
            pathColor: "#3b82f6",
            textColor: "#3b82f6",
            trailColor: "#e5e7eb",
            strokeLinecap: "round",
            pathTransitionDuration: 1.5,
            rotation: 1 / 2 + 1 / 8,
          })}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-500">
          <span className="text-lg font-bold text-black">{calories} cal</span>
          <span className="text-sm">{percentage}% of Goal</span>
        </div>
      </div>
    </div>
  );
};

export default Char;
