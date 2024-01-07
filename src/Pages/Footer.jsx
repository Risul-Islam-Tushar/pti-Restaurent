import footerImg from "../Assets/Image2.png";
import { FaGoogle, FaTwitter, FaInstagram, FaArrowRight } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div>
        <div className="bg-amber-500 ">
          <div className="hidden md:flex justify-between max-w-5xl mx-auto">
            <div className=" pt-14 pl-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-[500px] rounded-2xl p-7"
                ></input>
                <button className="btn bg-[#FC6011] text-white absolute right-2 top-1 w-36 py-0 rounded-2xl flex justify-between">
                  Subscribe
                  <span>
                    <FaArrowRight></FaArrowRight>
                  </span>
                </button>
              </div>

              <h1 className="mt-10 text-2xl font-bold">
                pti<span className="text-[#FC6011] ">.</span>
              </h1>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-sm pt-3 font-medium">
                    Copyright@Trip.All Right Reserved
                  </h1>
                </div>
                <div className="flex gap-5">
                  <div className="rounded-full p-2 bg-white text-[#FC6011]">
                    <FaGoogle></FaGoogle>
                  </div>
                  <div className="rounded-full p-2  bg-white text-[#FC6011]">
                    <FaTwitter></FaTwitter>
                  </div>
                  <div className="rounded-full p-2  bg-white text-[#FC6011]">
                    <FaInstagram></FaInstagram>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img className="h-60" src={footerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* for small device */}
      <div>
        <div className="flex md:hidden">
          <div className="bg-amber-500 w-full">
            <div className="relative mx-5">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered w-full rounded-2xl mt-2"
              ></input>
              <button className=" absolute right-2 top-5 flex items-center gap-2 text-[#FC6011] ">
                Subscribe
                <span>
                  <FaArrowRight></FaArrowRight>
                </span>
              </button>
            </div>
            <div className="flex gap-5 mt-4 justify-center">
              <div className="rounded-full p-2 text-white bg-[#FC6011]">
                <FaGoogle className=""></FaGoogle>
              </div>
              <div className="rounded-full p-2 text-white bg-[#FC6011]">
                <FaTwitter></FaTwitter>
              </div>
              <div className="rounded-full p-2 text-white bg-[#FC6011]">
                <FaInstagram></FaInstagram>
              </div>
            </div>

            <h1 className="mt-4 text-2xl font-bold text-center">pti</h1>

            <h1 className="text-sm pt-3 font-medium text-center pb-5">
              Copyright@Trip.All Right Reserved
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
