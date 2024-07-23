import faq from "../assets/images/faq.png";

const Faq = () => {
  return (
    <div className="container mx-auto px-10 lg:py-32 py-20">
      <div className="flex items-center lg:flex-row flex-col-reverse">
        <div className="lg:w-1/2 w-full ">
          <div className="flex flex-col space-y-4 mb-9 lg:mt-0 mt-7 lg:text-start text-center">
            <h3 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-[#172048]">
              Frequently Asked Questions
            </h3>
            <p className="xl:text-2xl lg:text-xl md:text-lg text-base text-[#172048] font-medium">
              General Question
            </p>
          </div>
          <div>
            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 bg-white font-medium text-gray-500 border shadow  rounded-[60px] focus:ring-4 focus:ring-gray-200  hover:bg-gray-100"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span className="font-medium text-[#777777] lg:text-xl md:text-lg sm:text-base text-sm">
                    How does FitLifestyle track my steps ?
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="p-8 tracking-wider leading-relaxed border mb-4 rounded-[60px] shadow">
                  <p className=" text-gray-800 ">
                    FitLifestyle tracks your steps using the built-in pedometer
                    feature of your smartphone or wearable device. By syncing
                    with your device, FitLifestyle accurately records your daily
                    step count, providing insights into your physical activity
                    levels. The app continuously monitors your movements
                    throughout the day, ensuring that all steps are counted and
                    displayed in real-time on your dashboard.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 bg-white font-medium text-gray-500 border shadow  rounded-[60px] focus:ring-4 focus:ring-gray-200  hover:bg-gray-100 mt-4"
                  data-accordion-target="#accordion-collapse-body-2"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-2"
                >
                  <span className="font-medium text-[#777777] lg:text-xl md:text-lg sm:text-base text-sm">
                    Is my personal data safe with FitLifestyle ?
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div className="p-8 tracking-wider leading-relaxed border mb-4 rounded-[60px] shadow">
                  <p className=" text-gray-800 ">
                    Yes, your personal data is safe with FitLifestyle. We
                    prioritize your privacy and employ state-of-the-art security
                    measures to protect your information. All data is encrypted
                    both in transit and at rest. Additionally, we adhere to
                    strict data protection regulations and never share your
                    personal information with third parties without your
                    consent. You can review our privacy policy for more details
                    on how we safeguard your data.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 bg-white font-medium text-gray-500 border shadow  rounded-[60px] focus:ring-4 focus:ring-gray-200  hover:bg-gray-100 mt-4"
                  data-accordion-target="#accordion-collapse-body-3"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-3"
                >
                  <span className="font-medium text-[#777777] lg:text-xl md:text-lg sm:text-base text-sm">
                    Can FitLifestyle help me monitor my heart health ?
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-3"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-3"
              >
                <div className="p-8 tracking-wider leading-relaxed border mb-4 rounded-[60px] shadow">
                  <p className=" text-gray-800 ">
                    Absolutely. FitLifestyle includes features for monitoring
                    heart health by integrating with compatible heart rate
                    monitors and fitness trackers. The app tracks your heart
                    rate during various activities and provides you with
                    detailed reports on your cardiovascular health. It also
                    offers personalized recommendations based on your heart rate
                    data to help you maintain a healthy lifestyle.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-4">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 bg-white font-medium text-gray-500 border shadow  rounded-[60px] focus:ring-4 focus:ring-gray-200  hover:bg-gray-100 mt-4"
                  data-accordion-target="#accordion-collapse-body-4"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-4"
                >
                  <span className="font-medium text-[#777777] lg:text-xl md:text-lg sm:text-base text-sm">
                    How does FitLifestyle personalize my experience ?
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-4"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-4"
              >
                <div className="p-8 tracking-wider leading-relaxed border mb-4 rounded-[60px] shadow">
                  <p className=" text-gray-800 ">
                    FitLifestyle personalizes your experience through a
                    combination of user input and data analysis. Upon setup, you
                    provide information about your health goals, preferences,
                    and activity levels. The app then uses this information to
                    tailor recommendations, workout plans, and health tips
                    specifically to your needs. As you use FitLifestyle, it
                    learns from your activity patterns and progress to
                    continuously refine and adjust its suggestions, ensuring
                    that your experience is relevant and effective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center">
          <img src={faq} alt="FAQ" className="w-1/2 " />
        </div>
      </div>
    </div>
  );
};

export default Faq;
