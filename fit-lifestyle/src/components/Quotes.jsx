import quotes1 from "../assets/images/quotes1.png";

const Quotes = () => {
  return (
    <div className="container mx-auto px-10 py-32">
      <div className="flex items-center justify-around">
        <div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-5xl text-[#172048]">
              Let&apos;s Start Running
            </h4>
            <p className="text-[#9D9D9D] font-medium text-2xl">
              for Better Health
            </p>
          </div>
          <div className="mt-14 p-7 shadow-lg bg-white rounded-s-3xl rounded-b-3xl max-w-lg">
            <div className="p-12 bg-gradient-to-r from-[#6180EE] to-[#4A72FF] rounded-s-xl rounded-b-xl">
              <div className="text-white">
                <p>Orthpedy</p>
                <p className="text-2xl font-semibold">Dr. James Wellington</p>
              </div>
              <div className="text-white mt-10">
                <p className="font-medium">
                  &quot;Lari rutin meningkatkan kebugaran, menurunkan risiko
                  penyakit jantung, mengontrol berat badan, dan memperkuat otot.
                  Mulailah sekarang untuk kesehatan optimal!&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={quotes1} alt="Quotes 1" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Quotes;
