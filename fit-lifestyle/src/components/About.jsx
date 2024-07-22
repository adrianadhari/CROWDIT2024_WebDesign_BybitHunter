import { useState } from "react";
import about from "../assets/images/about.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Konten untuk tab "About"
  const aboutContent = (
    <>
      <h3 className="font-bold text-5xl text-[#172048]">About Lifestyle</h3>
      <p className="text-2xl text-[#777777] leading-relaxed">
        FitLifestyle is dedicated to enhancing health and wellness through
        advanced technology. We offer precise step tracking, heart health
        monitoring, and efficient calorie management tailored to individual
        needs.
      </p>
    </>
  );

  // Konten untuk tab "Vision & Mission"
  const visionMissionContent = (
    <>
      <h3 className="font-bold text-5xl text-[#172048]">Vision & Mission</h3>
      <p className="text-2xl text-[#777777] leading-relaxed">
        Our vision is to be the leading platform in promoting health and
        wellness globally. We aim to inspire and motivate individuals to lead
        healthier lives through innovative solutions.
      </p>
      <p className="text-2xl text-[#777777] leading-relaxed">
        Our mission is to provide users with the best tools and resources to
        track their fitness journey, stay motivated, and achieve their health
        goals in a sustainable manner.
      </p>
    </>
  );

  // Tentukan konten yang ditampilkan berdasarkan state
  const content = activeTab === "about" ? aboutContent : visionMissionContent;
  return (
    <div className="container mx-auto px-10 py-32 mt-14" id="about">
      <div className="flex items-center">
        <div className="w-1/2">
          <div className="flex items-center">
            <button
              className={`px-14 py-2 text-2xl rounded-[60px] ${
                activeTab === "about"
                  ? "text-white bg-[#4A72FF]"
                  : "bg-white text-[#4A72FF] border-2 border-[#4A72FF]"
              }`}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
            <div className="border-2 border-solid border-[#4A72FF] w-24"></div>
            <button
              className={`px-14 py-2 text-2xl rounded-[60px] ${
                activeTab === "visionMission"
                  ? "text-white bg-[#4A72FF]"
                  : "bg-white text-[#4A72FF] border-2 border-[#4A72FF]"
              }`}
              onClick={() => setActiveTab("visionMission")}
            >
              Vision & Mission
            </button>
          </div>
          <div className="flex flex-col space-y-6 mt-16 max-w-2xl">
            {content}
          </div>
        </div>
        <div className="w-1/2 ">
          <img src={about} alt="About" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
