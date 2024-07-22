import hero from "../assets/images/hero.png";
import users from "../assets/images/users-active.png";
import blob from "../assets/images/blob2.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #EEF2FF 100%, rgba(238, 242, 255, 0) 0%)",
      }}
    >
      <Navbar />
      <div className="container mx-auto px-10 py-7 relative  min-h-[90vh] pt-14">
        <img
          src={blob}
          alt="blob"
          className="bottom-40 right-[650px] absolute blur-3xl opacity-60"
        />
        <div className="flex items-center py-12">
          <div className="w-1/2">
            <div className="flex flex-col max-w-3xl">
              <h1 className="font-nunito text-6xl font-extrabold text-[#172048] leading-tight mb-6">
                Make Your Life Healthier with{" "}
                <span className="gradient-text">FitLifestyle</span>
              </h1>
              <p className="text-2xl text-[#9D9D9D]">
                FitLifestyle makes it easy for you to control your steps, heart
                rate and calories. Join and start living healthy today!
              </p>
              <div className="my-16">
                <a
                  href="/dashboard"
                  className="bg-[#4A72FF] py-3 px-14 text-white rounded-3xl font-bold text-2xl tracking-wide hover:opacity-90"
                >
                  Activity
                </a>
              </div>
              <div className="py-5 px-10 rounded-2xl bg-[#E8ECF9] flex flex-col w-fit space-y-4">
                <p className="font-semibold text-2xl text-[#172048]">
                  200+ <span className="text-[#4A72FF]">User Active</span>
                </p>
                <div className="flex-items-center">
                  <img src={users} alt="User Active" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img src={hero} alt="" className="ps-14 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
