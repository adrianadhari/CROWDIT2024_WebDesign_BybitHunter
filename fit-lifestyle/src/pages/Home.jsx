import hero from "../assets/images/hero.png";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center py-12">
          <div className="w-1/2">
            <div className="flex flex-col max-w-2xl">
              <h1 className="text-6xl font-extrabold text-['#172048'] leading-tight">
                Jadikan Hidupmu Lebih Sehat dengan{" "}
                <span className="text-blue-400">FitLifestyle</span>
              </h1>
              <p>
                FitLifestyle memudahkan Anda mengontrol langkah, detak jantung,
                dan kalori Anda. Bergabunglah dan mulailah hidup sehat hari ini!
              </p>
              <a href="#">Dashboard Activity</a>
              <div className="p-5 rounded-xl bg-blue-100">
                200+ <span>User Active</span>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
