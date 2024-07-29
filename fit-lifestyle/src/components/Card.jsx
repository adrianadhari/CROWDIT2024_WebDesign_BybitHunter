/* eslint-disable react/prop-types */
// import statements
import img1 from "../assets/images/heart-health.png";
import img2 from "../assets/images/efficient-calorie.png";
import img3 from "../assets/images/easy-personalization.png";
import img4 from "../assets/images/accurate-step.png";

// data dummy
const cards = [
  {
    image: img1,
    title: "Heart Health Monitoring",
    description: "Get daily reports and tips to maintain a healthy heart.",
    delay: 700,
  },
  {
    image: img2,
    title: "Efficient Calorie Counting",
    description:
      "FitLifestyle helps manage your calorie intake to meet your health objectives.",
    delay: 850,
  },
  {
    image: img3,
    title: "Easy Personalization",
    description:
      "FitLifestyle personalizes based on your unique needs and goals",
    delay: 1000,
  },
  {
    image: img4,
    title: "Accurate Step Tracking",
    description:
      "FitLifestyle uses advanced tech to accurately record every step.",
    delay: 1200,
  },
];

// Card component
const Card = ({ image, title, description, delay }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={delay}
      className="bg-white flex flex-col justify-center items-center px-8 lg:py-14 py-6 shadow-lg rounded-3xl lg:space-y-11 space-y-2 text-center hover:scale-105 cursor-pointer transition-all duration-200 ease-in"
    >
      <img src={image} alt={title} className="lg:mb-4 mb-0 lg:w-auto w-12" />
      <h3 className="lg:text-2xl text-base font-bold text-[#172048]">
        {title}
      </h3>
      <p className="font-medium text-[#A8A8A8] lg:text-lg text-sm ">
        {description}
      </p>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="flex">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            delay={card.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
