import React from "react";

export default function About() {
  return (
    <div className="bg-primary h-auto pt-28">
      <div className="container py-52 p-24 flex items-center justify-center flex-col gap-4">
        <h1 className="text-4xl font-bold text-white pt-5">ABOUT COMPONENT</h1>
        <div className="flex gap-5 items-center justify-center">
          <div className="bg-white h-1 w-20"></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className="bg-white h-1 w-20"></div>
        </div>
        <div className="text-white flex space-x-2">
          <div className="">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
          <div className="">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
        </div>
      </div>
    </div>
  );
}
