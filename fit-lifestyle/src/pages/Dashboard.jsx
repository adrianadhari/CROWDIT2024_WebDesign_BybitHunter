import Heart from "../assets/images/heart.gif";
import Orang from "../assets/images/orang.png";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="w-2/5 ">
          <h1 className="text-5xl font-bold">Dashboard</h1>
          <p className="text-slate-500 text-3xl">Activities</p>
          <div className="relative">
            <img
              src={Heart}
              className="scale-150 py-24
            "
            />
            <div className="absolute top-[360px] left-32">
              <div className="w-64 bg-white opacity-90 shadow-xl p-8 rounded-xl">
                <div className="w-2/3">
                  <p className="text-slate-500 text-2xl opacity-100">
                    Heart Rate
                  </p>
                  <p className="text-slate-500 opacity-100">
                    <span className="text-black text-2xl">4000</span> Bpm
                  </p>
                </div>
                <div className="w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5 bg-green-500">
          <div className="w-full bg-white rounded-full shadow-xl p-4 mb-10 flex justify-end">
            <button className="bg-blue-500 px-6 py-2 text-white rounded-full text-right">
              set Menu
            </button>
          </div>
          <h1 className="font-bold text-4xl">Activities</h1>
          <div className="w-1/2">
            <div className="flex p-8 bg-red-500 justify-between rounded-xl">
              <img src={Orang} alt="" />
              <p className="text-slate-500 text-xl">
                Distance <br />
                <span className="text-black text-2xl">4000</span> ft
              </p>
              <div>
                <h1>ini char 70%</h1>
              </div>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
