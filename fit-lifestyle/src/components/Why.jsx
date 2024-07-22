import CardList from "./Card";

const Why = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #EEF2FF 0%, rgba(238, 242, 255, 0.5) 50%, rgba(238, 242, 255, 0) 100%)",
      }}
    >
      <div className="container mx-auto px-10 pt-32">
        <div className="flex flex-col space-y-3">
          <h2 className="font-bold text-5xl text-[#172048]">
            Why Choose FitLifestyle
          </h2>
          <p className="text-2xl text-[#9D9D9D]">
            Embark on Your Path to a Healthier, Happier Life with FitLifestyle
          </p>
        </div>
        <div className="flex justify-center mt-16 w-3/4 mx-auto">
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default Why;
