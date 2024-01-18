import React from "react";

const Navbar = () => {
  const [menu, showMenu] = React.useState(false);
  const showNav = () => {
    showMenu((prevData) => !prevData);
  };
  return (
    <nav className={menu ? "fixed top-0 right-0 w-full z-1" : "static"}>
      <div className="container mx-auto text-xl py-4 px-3 ">
        <div className="flex justify-between">
          <a href="">Page logo</a>
          <span
            onClick={showNav}
            id="menuIcon"
            className="relative w-[30px] h-[25px] flex flex-col justify-between cursor-pointer z-[2] lg:hidden"
          >
            <span className="bg-yellow-400 w-full h-[5px] rounded-md"></span>
            <span className="bg-yellow-400 w-full h-[5px] rounded-md"></span>
            <span className="bg-yellow-400 w-full h-[5px] rounded-md"></span>
          </span>
          <ul
            id="menuList"
            className={
              menu
                ? "flex transition-all gap-5 max-lg:flex-col max-lg:right-[0] max-lg:fixed h-full max-lg:w-full max-lg:justify-center items-center max-lg:bg-slate-600 max-lg:z-[1] max-lg:top-0"
                : "flex transition-all gap-5 max-lg:flex-col max-lg:right-[-100%] max-lg:fixed h-full max-lg:w-full max-lg:justify-center items-center max-lg:bg-slate-600 max-lg:z-[1] max-lg:top-0"
            }
          >
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
