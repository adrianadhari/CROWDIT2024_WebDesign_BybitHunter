import { useState } from "react";
import about from "../assets/images/about.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Konten untuk tab "About"
  const aboutContent = (
    <>
      <h3 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-[#172048]">
        About FitLifestyle
      </h3>
      <p className="xl:text-2xl lg:text-xl md:text-lg text-base max-w-lg text-[#777777] leading-relaxed">
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
      <h3 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-[#172048]">
        Vision & Mission
      </h3>
      <p className="xl:text-2xl lg:text-xl md:text-lg text-base max-w-lg text-[#777777] leading-relaxed">
        Our vision is to be the leading platform in promoting health and
        wellness globally. We aim to inspire and motivate individuals to lead
        healthier lives through innovative solutions.
      </p>
      <p className="xl:text-2xl lg:text-xl md:text-lg text-base max-w-lg text-[#777777] leading-relaxed">
        Our mission is to provide users with the best tools and resources to
        track their fitness journey, stay motivated, and achieve their health
        goals in a sustainable manner.
      </p>
    </>
  );

  // Tentukan konten yang ditampilkan berdasarkan state
  const content = activeTab === "about" ? aboutContent : visionMissionContent;
  return (
    <div
      className="container mx-auto px-10 md:py-32 py-20 md:mt-14 mt-0"
      id="about"
    >
      <div className="flex md:flex-row flex-col-reverse ">
        <div className="xl:w-1/2 md:w-2/3 w-full">
          <div className="flex items-center md:justify-start md:mt-0 mt-12 justify-center">
            <button
              className={`px-6 md:px-14 py-2 xl:text-2xl lg:text-lg rounded-[60px] ${
                activeTab === "about"
                  ? "text-white bg-[#4A72FF]"
                  : "bg-white text-[#4A72FF] border-2 border-[#4A72FF]"
              }`}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
            <div className="border-2 border-solid border-[#4A72FF] lg:w-24 md:w-6 sm:w-14 w-4"></div>
            <button
              className={`px-6 md:px-14 py-2 xl:text-2xl lg:text-lg rounded-[60px] ${
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
        <div className="xl:w-1/2 md:w-1/3 w-full ">
          <img src={about} alt="About" className="w-3/4 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
