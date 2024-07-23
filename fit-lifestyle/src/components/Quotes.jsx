import quotes1 from "../assets/images/quotes1.png";

const Quotes = () => {
  return (
    <div
      className="container mx-auto px-10 lg:py-32 py-20"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <div className="flex md:flex-row flex-col items-end lg:justify-around ">
        <div>
          <div className="flex flex-col space-y-4 md:text-start text-center">
            <h4 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-[#172048]">
              Let&apos;s Start Running
            </h4>
            <p className="text-[#9D9D9D] font-medium xl:text-2xl lg:text-xl md:text-lg text-base">
              for Better Health
            </p>
          </div>
          <div className="xl:mt-14 md:mt-5 mt-10 xl:p-7 lg:p-5 md:p-3 p-3 shadow-lg bg-white rounded-s-3xl rounded-b-3xl max-w-lg">
            <div className="xl:p-12 lg:p-8 md:p-5 p-3 bg-gradient-to-r from-[#6180EE] to-[#4A72FF] rounded-s-xl rounded-b-xl">
              <div className="text-white md:text-start text-center">
                <p>Orthpedy</p>
                <p className="lg:text-2xl md:text-lg text-base font-semibold">
                  Dr. James Wellington
                </p>
              </div>
              <div className="text-white lg:mt-10 mt-5 md:text-start text-center">
                <p className="font-medium">
                  &quot;Lari rutin meningkatkan kebugaran, menurunkan risiko
                  penyakit jantung, mengontrol berat badan, dan memperkuat otot.
                  Mulailah sekarang untuk kesehatan optimal!&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-0 mt-5">
          <img
            src={quotes1}
            alt="Quotes 1"
            className="xl:w-full lg:w-[80%] md:w-[80%] md:ms-auto w-72"
          />
        </div>
      </div>
    </div>
  );
};

export default Quotes;
