import CardList from "./Card";

const Why = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #EEF2FF 0%, rgba(238, 242, 255, 0.5) 50%, rgba(238, 242, 255, 0) 100%)",
      }}
    >
      <div className="container mx-auto px-10 lg:pt-32 pt-2">
        <div
          className="flex flex-col space-y-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl md:text-start text-center text-[#172048]">
            Why Choose FitLifestyle
          </h2>
          <p className="xl:text-2xl lg:text-xl md:text-lg text-base text-[#9D9D9D] md:text-start text-center">
            Embark on Your Path to a Healthier, Happier Life with FitLifestyle
          </p>
        </div>
        <div className="flex justify-center mt-16 xl:w-3/4 w-full mx-auto ">
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default Why;
