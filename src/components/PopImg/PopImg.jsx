
export default function PopImg({visible , onClose ,image }) {
    const Close=(e)=>{
        if(e.target.id === "background")
           onClose();
    };

    if(!visible)return null;
  return (
    <div  className="fixed w-full inset-0 flex items-center justify-center">
    <div id='background' onClick={Close} className="cursor-pointer absolute inset-0 bg-blue-500 opacity-30 z-auto"></div>
    <div className="z-30 bg-red-500 ">
      <img src={image} alt="" className='max-w-full max-h-[450px]'/>
    </div>
  </div>
  )
}
