import hero from "../assets/images/hero.png";
import users from "../assets/images/users-active.png";
import blob from "../assets/images/blob2.png";
import Navbar from "./Navbar";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #EEF2FF 100%, rgba(238, 242, 255, 0) 0%)",
      }}
    >
      <Navbar />
      <div className="container mx-auto px-10 lg:py-7 py-28 relative  lg:min-h-[90vh] md:min-h-[50vh] pt-14 ">
        <img
          src={blob}
          alt="blob"
          className="bottom-40 right-[650px] absolute blur-3xl 2xl:opacity-60 opacity-0"
        />
        <div className="flex items-center lg:py-12">
          <div className="lg:w-1/2 w-full lg:text-left text-center">
            <div
              className="flex flex-col lg:max-w-3xl w-full "
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h1 className="font-nunito xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-extrabold text-[#172048] leading-tight mb-6">
                Make Your Life Healthier with{" "}
                <span className="gradient-text">FitLifestyle</span>
              </h1>
              <p className="xl:text-2xl lg:text-xl md:text-lg text-base text-[#9D9D9D]">
                FitLifestyle makes it easy for you to control your steps, heart
                rate and calories. Join and start living healthy today!
              </p>
              <div className="my-16">
                <a
                  href="/dashboard"
                  className="bg-[#4A72FF] lg:py-3 lg:px-14 py-2 px-10 text-white rounded-3xl font-bold xl:text-2xl lg:text-xl md:text-lg text-base tracking-wide hover:opacity-90"
                >
                  Activity
                </a>
              </div>
              <div className="lg:py-5 lg:px-10 py-3 px-7 rounded-2xl bg-[#E8ECF9] flex flex-col w-fit space-y-4 mx-auto lg:mx-0">
                <p className="font-semibold lg:text-2xl text-lg text-[#172048]">
                  <CountUp end={200} duration={5} />+{" "}
                  <span className="text-[#4A72FF]">User Active</span>
                </p>
                <div className="flex-items-center">
                  <img
                    src={users}
                    alt="User Active"
                    className="w-36 lg:w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/2 w-0"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src={hero} alt="" className="ps-14 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
