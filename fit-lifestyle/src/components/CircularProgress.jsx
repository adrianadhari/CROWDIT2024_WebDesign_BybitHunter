import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";

const CircularProgress = ({ textSize = "3xl", targetPercentage = 70 }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPercentage(targetPercentage);
    }, 100);

    return () => clearTimeout(timeout);
  }, [targetPercentage]);

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
          <span className={`text-${textSize} font-bold`}>
            <CountUp end={targetPercentage} duration={5} />%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
