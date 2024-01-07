import coverImg from "../Assets/Image1.png";
const Cover = () => {
  return (
    <div>
      <div className="hidden md:flex max-w-5xl mx-auto">
        <div className="w-full h-[380px] mt-28 flex justify-between items-center bg-amber-500 rounded-2xl ">
          <div>
            <h1 className="text-4xl font-semibold ps-14 pt-28 text-white">
              Deliver Food To Your
              <br /> Door Stepl
            </h1>
            <p className="ps-14 pt-7 text-xl font-light text-white">
              Authentic Food,Quick Service,Fast Delivery
            </p>
          </div>
          <div className="-mt-2">
            <img src={coverImg} alt="" />
          </div>
        </div>
      </div>
      {/* for small screen */}

      <div className="flex md:hidden">
        <div className=" mt-9 text-center mx-auto">
          <div className="text-black ">
            <h1 className="text-2xl font-semibold">
              Deliver Food To Your Door
              <br /> Stepl
            </h1>
            <p className="text-sm mt-3 ">
              Authentic Food,Quick Service,Fast Delivery
            </p>
          </div>
          <div className="mt-14 h-[160px] w-auto mx-auto rounded-2xl bg-[#FD9460] relative">
            <img className="absolute bottom-2" src={coverImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
