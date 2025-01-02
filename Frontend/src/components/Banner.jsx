import React from "react";
import right_banner from "/right_banner.jpg?url"
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container flex flex-col md:flex-row mx-auto px-6 py-12 my-4 md:py-20 md:px-20">
        <div className=" order-2 md:order-1 md:w-1/2">
          <div className="space-y-12">
            <h1 className="font-bold text-4xl">
              Hello, welcomes here to connect with your
              <span className="text-yellow-500"> studybuddy!!!</span>
            </h1>
            <p className="font-bold">
              Here we study together(Sundays). <br />
              We do study sessions on{" "}
              <a
                href="https://meet.google.com/wko-jzmq-rtz"
                className="relative group inline-block"
              >
                <div className="text-2xl font-bold">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                  <span className="text-black"> </span>
                  <span className="text-blue-500">M</span>
                  <span className="text-red-500">e</span>
                  <span className="text-yellow-500">e</span>
                  <span className="text-green-500">t</span>
                </div>
                {/* Tooltip on hover */}
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 text-sm text-gray-700 bg-gray-200 rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className=" text-red-700 "> Open 24/7</span>
                </span>
              </a>
              . <br />
              <br />
              Let's support and grow together 🙂.
            </p>
            <div className=" ">
              <button className="btn  btn-outline btn-sm btn-success">
                <a href="https://chat.whatsapp.com/CT44Bc47pKNEGWAoEyJfq1">
                  Whatsapp group
                </a>
              </button>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <div className="py-4">
          <button className="btn  btn-sm btn-accent">Accent</button>
          </div>
          
        </div>
        <div className=" order-1 md:order-2 md:w-1/2">
            <img src={right_banner}/>
        </div>
      </div>
    </>
  );
}

export default Banner;
