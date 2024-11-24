import React from "react";

export default function Footer() {
  return (
    <div className="">
      <div className="  bg-slate-700 py-24">
        <div className="text-white mx-auto grid grid-cols-12 gap-y-8 px-10">
          <div className="col-span-12  lg:col-span-4 text-center ">
            <h3 className="text-3xl font-medium  ">LOCATION</h3>
            <p className="my-3">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-span-12  lg:col-span-4  text-center">
            <h3 className="text-3xl font-medium ">AROUND THE WEB</h3>
            <div className="social-icons flex justify-center items-center ">
              <div className="border rounded-full border-solid border-white py-2 px-3 m-1">
                <a href="https://www.facebook.com/" target="blank"><i className="fa-brands fa-facebook"></i></a>
              </div>
              <div className="border rounded-full border-solid border-white py-2 px-3  m-1">
                <a href="https://twitter.com/" target="blank"><i className="fa-brands fa-twitter icon"></i></a>
              </div>
              <div className="border rounded-full border-solid border-white py-2 px-3  m-1">
                <a href="https://www.linkedin.com/" target="blank"><i className="fa-brands fa-linkedin-in icon"></i></a>
              </div>
              <div className="border rounded-full border-solid border-white py-2 px-3  m-1">
                <a href=""><i className="fa-solid fa-globe icon"></i></a>
              </div>
            </div>
          </div>
          <div className="col-span-12  lg:col-span-4 text-center">
            <h3 className="text-3xl font-medium text-center mb-3">ABOUT FREELANCER</h3>
            <p className="px-5">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="bg-sec py-5">
        <p className="text-white text-center">Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
