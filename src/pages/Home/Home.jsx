import React from "react";
import avatar from "../../assets/imgs/avataaars.svg";
export default function Home() {
  return (
    <div className="bg-primary h-auto pt-28">
      <div className="container p-24 flex items-center justify-center flex-col gap-4">
        <div className="w-64">
          <img src={avatar} alt="" className="w-full" />
        </div>
        <h1 className="text-4xl font-bold text-white pt-5">START FRAMEWORK</h1>
        <div className="flex gap-5 items-center justify-center">
          <div className="bg-white h-1 w-20"></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className="bg-white h-1 w-20"></div>
        </div>
        <div className="text-white">Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </div>
  );
}
