import { useState } from "react";
import Heart from "../assets/images/heart.gif";
import Orang from "../assets/images/orang.png";
import CircularProgress from "../components/CircularProgress";
import BarChart from "../components/BarChart";
import Char from "../components/Char";
import NavbarDashboard from "../components/NavbarDashboard";
import Newsletter from "../components/NewsLetter";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavbarDashboard />
      <div className="container mx-auto px-4 lg:px-10 py-10">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/5 mb-10 lg:mb-0">
            <h1 className="text-3xl lg:text-5xl font-bold">Dashboard</h1>
            <p className="text-lg lg:text-3xl text-slate-500">Activities</p>
            <div className="relative mt-10 lg:mt-0">
              <img src={Heart} className="w-full lg:scale-150 py-6 lg:py-24" />
              <div className="absolute top-40 lg:top-[360px] left-1/2 transform -translate-x-1/2 lg:left-32">
                <div className="w-64 flex bg-white opacity-90 shadow-xl p-8 rounded-xl">
                  <div className="w-2/3">
                    <p className="text-slate-500 text-xl lg:text-2xl opacity-100">
                      Heart Rate
                    </p>
                    <p className="text-slate-500 opacity-100">
                      <span className="text-black text-xl lg:text-2xl">85</span>{" "}
                      Bpm
                    </p>
                  </div>
                  <div className="w-1/3">
                    <CircularProgress textSize="lg" targetPercentage={95} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/5 relative z-99">
            <div className="flex flex-col lg:flex-row justify-between mb-10">
              <div className="flex space-x-5">
                <Link to="#" className="mt-1 cursor-pointer">
                  <FaGear className="text-[#4E74FC] text-4xl" />
                </Link>
                <div>
                  <h1 className="font-bold text-2xl lg:text-4xl">
                    Activities <br />
                    <span className="text-lg lg:text-2xl font-normal text-slate-500">
                      Record your Activity
                    </span>
                  </h1>
                </div>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-500 px-6 py-2 text-white rounded-full lg:text-right text-center h-12 mt-4 lg:mt-0"
                type="button"
              >
                Set Your Menu
              </button>
            </div>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="w-full lg:w-1/2">
                <div className="w-full h-60 bg-white items-center shadow-xl flex my-10 p-5 rounded-3xl">
                  <div className="w-1/2">
                    <h1 className="text-xl lg:text-3xl text-black">
                      Calories <br />
                      <span className="text-slate-500 text-lg lg:text-xl">
                        Today
                      </span>
                    </h1>
                  </div>
                  <div className="w-1/2">
                    <Char />
                  </div>
                </div>
                <div className="w-full shadow-xl bg-white rounded-2xl p-5 my-10">
                  <BarChart />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="w-full h-96 bg-white shadow-xl p-8 rounded-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7379.518211882179!2d106.79780181657307!3d-6.5995253441155475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5c191f0a555%3A0xe6e757cf32829f41!2sKesatuan%20Economics%20Institute!5e0!3m2!1sen!2sid!4v1721636102786!5m2!1sen!2sid"
                    className="w-full h-80 rounded-lg"
                  ></iframe>
                </div>
                <div className="w-full shadow-xl bg-white rounded-2xl my-10">
                  <div className="flex py-4 px-8 justify-between items-center ">
                    <img src={Orang} alt="" className="w-16 h-16" />
                    <p className="text-slate-500 text-xl">
                      Distance <br />
                      <span className="text-black text-2xl">4500</span> ft
                    </p>
                    <div>
                      <CircularProgress />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Set Your Menu</h3>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <div className="my-4 flex text-blueGray-500 text-lg leading-relaxed">
                      <p className="w-2/3">Choose your healthy menu</p>
                      <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option disabled selected>
                          Select
                        </option>
                        <option>Fruits</option>
                        <option>Vegetables</option>
                        <option>Soup</option>
                      </select>
                    </div>
                    <div className="my-4 flex text-blueGray-500 text-lg leading-relaxed">
                      <p className="w-2/3">Choose your meal time</p>
                      <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option disabled selected>
                          Select
                        </option>
                        <option>Breakfast</option>
                        <option>Brunch</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
      </div>
      <Newsletter />
    </>
  );
};

export default Dashboard;
