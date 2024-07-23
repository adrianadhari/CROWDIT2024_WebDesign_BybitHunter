/* eslint-disable react/prop-types */
// import statements
import img1 from "../assets/images/heart-health.png";
import img2 from "../assets/images/efficient-calorie.png";
import img3 from "../assets/images/easy-personalization.png";

// data dummy
const cards = [
  {
    image: img1,
    title: "Heart Health Monitoring",
    description: "Get daily reports and tips to maintain a healthy heart.",
  },
  {
    image: img2,
    title: "Efficient Calorie Counting",
    description:
      "FitLifestyle helps manage your calorie intake to meet your health objectives.",
  },
  {
    image: img3,
    title: "Easy Personalization",
    description:
      "FitLifestyle personalizes based on your unique needs and goals",
  },
];

// Card component
const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center px-8 lg:py-14 py-6 shadow-lg rounded-3xl lg:space-y-11 space-y-2 text-center hover:scale-105 cursor-pointer transition-all duration-200 ease-in">
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
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
