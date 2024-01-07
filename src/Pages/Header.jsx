import { FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="navbar bg-slate-200 hidden lg:flex">
        <div className="flex-1">
          <a className="text-4xl font-bold">pti.</a>
        </div>
        <div className=" gap-2 ">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search Audiobook"
              className="input input-bordered w-[500px] "
            />
          </div>
          <div className="dropdown pr-36">
            <div tabIndex={0} role="button" className="btn m-1 w-36">
              MENU
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Details</a>
              </li>
              <li>
                <a>Category</a>
              </li>
              <li>
                <a>My Favorites</a>
              </li>
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Log In/Sing Up</a>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <div className="w-10 h-10 rounded-full text-white bg-orange-500 flex items-center justify-center">
                <FaUser></FaUser>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* for small screen */}
      <div className="navbar bg-slate-200 flex justify-evenly lg:hidden">
        <div>
          <a className="text-2xl font-bold">pti.</a>
        </div>
        <div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search Audiobook"
              className="input input-bordered "
            />
          </div>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn w-16 ">
            MENU
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Details</a>
            </li>
            <li>
              <a>Category</a>
            </li>
            <li>
              <a>My Favorites</a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Log In/Sing Up</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
