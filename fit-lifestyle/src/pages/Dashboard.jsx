import { useState } from "react";
import Heart from "../assets/images/heart.gif";
import Orang from "../assets/images/orang.png";
import CircularProgress from "../components/CircularProgress";
import BarChart from "../components/BarChart";
import Char from "../components/Char";
import NavbarDashboard from "../components/NavbarDashboard";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <NavbarDashboard />
      <div className="container mx-auto px-10 py-10">
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
                <div className="w-64 flex bg-white opacity-90 shadow-xl p-8 rounded-xl">
                  <div className="w-2/3">
                    <p className="text-slate-500 text-2xl opacity-100">
                      Heart Rate
                    </p>
                    <p className="text-slate-500 opacity-100">
                      <span className="text-black text-2xl">4000</span> Bpm
                    </p>
                  </div>
                  <div className="w-1/3">
                    <CircularProgress textSize="lg" targetPercentage={50} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/5">
            <div className="flex justify-between mb-10">
              <h1 className="font-bold text-4xl">
                Activities <br />{" "}
                <span className="text-2xl font-normal text-slate-500">
                  Record your Activity
                </span>
              </h1>
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-500 px-6 py-2 text-white rounded-full text-right h-12"
                type="button"
              >
                Set Your Menu
              </button>
            </div>
            <div className="flex gap-10">
              <div className="w-1/2">
                <div className="w-full h-60 bg-white items-center shadow-xl flex my-10 p-5 rounded-3xl">
                  <div className="w-1/2">
                    <h1 className="text-3xl text-black">
                      Calories <br />
                      <span className="text-slate-500 text-xl">Today</span>
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
              <div className="w-1/2">
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
                      <span className="text-black text-2xl">4000</span> ft
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

        {/* Modals */}

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Set Your Menu</h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      I always felt like I could do anything. That&apos;s the
                      main thing people are controlled by! Thoughts- their
                      perception of themselves! They&apos;re slowed down by
                      their perception of themselves. If you&apos;re taught you
                      can&apos;t do anything, you won’t do anything. I was
                      taught I could do everything.
                    </p>
                  </div>
                  {/*footer*/}
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
        ) : null}
        {/* Modals */}
      </div>
    </>
  );
};

export default Dashboard;
