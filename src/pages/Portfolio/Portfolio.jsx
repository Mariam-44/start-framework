import { useState } from "react";
import img1 from "../../assets/imgs/poert1.png"
import img2 from "../../assets/imgs/port2.png"
import img3 from "../../assets/imgs/port3.png"

import PopImg from "../../components/PopImg/PopImg";

export default function Portfolio() {

  const [popImg , setPopImg]= useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const Close = () => setPopImg(false);

  const ImageClick = (img) => {
    setCurrentImg(img); 
    setPopImg(true);
  };
  return (
    <div className="container pt-28">
      <div className="title flex items-center justify-center flex-col gap-4 uppercase"><h1 className="text-4xl font-bold text-slate-700 pt-5">
        portfolio component
      </h1>
      <div className="flex gap-5 items-center justify-center">
        <div className="bg-slate-700 h-1 w-20"></div>
        <i className="fa-solid fa-star text-slate-700"></i>
        <div className="bg-slate-700 h-1 w-20"></div>
      </div></div>
      
      <div className="cards grid grid-cols-12 py-12 gap-12">
        <div className="card col-span-12 md:col-span-6 lg:col-span-4 bg-base-100 image-full shadow-xl rounded overflow-hidden relative">
          <figure>
            <img
              src={img1}
              alt="House"
            />
          </figure>
          <div onClick={()=> ImageClick(img1)} className="card-body absolute inset-0 bg-primary opacity-0 hover:opacity-90 transition-all duration-500 cursor-pointer flex justify-center items-center">
          <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div className="card col-span-12 md:col-span-6 lg:col-span-4 bg-base-100 image-full shadow-xl rounded overflow-hidden relative">
          <figure>
            <img
              src={img2}
              alt="House"
            />
          </figure>
          <div onClick={()=>  ImageClick(img2)} className="card-body absolute inset-0 bg-primary opacity-0 hover:opacity-90 transition-all duration-500 cursor-pointer flex justify-center items-center">
          <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div className="card col-span-12 md:col-span-6 lg:col-span-4 bg-base-100 image-full shadow-xl rounded overflow-hidden relative">
          <figure>
            <img
              src={img3}
              alt="House"
            />
          </figure>
          <div onClick={()=>  ImageClick(img3)} className="card-body absolute inset-0 bg-primary opacity-0 hover:opacity-90 transition-all duration-500 cursor-pointer flex justify-center items-center">
          <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div className="card col-span-12 md:col-span-6 lg:col-span-4 bg-base-100 image-full shadow-xl rounded overflow-hidden relative">
          <figure>
            <img
              src={img1}
              alt="House"
            />
          </figure>
          <div onClick={()=> ImageClick(img1)} className="card-body absolute inset-0 bg-primary opacity-0 hover:opacity-90 transition-all duration-500 cursor-pointer flex justify-center items-center">
          <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div className="card col-span-12 md:col-span-6 lg:col-span-4 bg-base-100 image-full shadow-xl rounded overflow-hidden relative">
          <figure>
            <img
              src={img2}
              alt="House"
            />
          </figure>
          <div onClick={()=>  ImageClick(img2)} className="card-body absolute inset-0 bg-primary opacity-0 hover:opacity-90 transition-all duration-500 cursor-pointer flex justify-center items-center">
          <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div className="card col-span-12 md:col-span-6 lg:col-span-4 bg-base-100 image-full shadow-xl rounded overflow-hidden relative">
          <figure>
            <img
              src={img3}
              alt="House"
            />
          </figure>
          <div onClick={()=>  ImageClick(img3)} className="card-body absolute inset-0 bg-primary opacity-0 hover:opacity-90 transition-all duration-500 cursor-pointer flex justify-center items-center">
          <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
      </div>
      <PopImg onClose={Close} visible={popImg} image={currentImg}/>
    </div>
  );
}
