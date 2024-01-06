/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import logo from "../assets/adhyaay.jpeg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink } from "react-router-hash-link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const navItems = [
  {
    text: "HOME",
    link: "/",
  },
  {
    text: "EVENTS",
    link: "/events",
  },
  {
    text: "MERCH",
    link: "/merch",
  },
  {
    text: "SPONSORS",
    link: "/sponsors",
  },
  {
    text: "TEAM",
    link: "/team",
  },
  {
    text: "CONTACT",
    link: "#contact",
  },
];

const Navbar = ({ name }) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("Name");
    localStorage.removeItem("Token");
    window.location.reload(false);
    toast("You have logged out");
  };

  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const handleDrawer = () => setOpenDrawer(!openDrawer);
  return (
    <>
      <ToastContainer />
      {matches && (
        <div className="flex items-center px-2 justify-between absolute min-w-full z-10">
          <img src={logo} width={300} className="mt-2" />
          <div className="flex items-center">
            {navItems.map((items) => (
              <>
                {items.text !== "CONTACT" ? (
                  <Link
                    to={items.link}
                    className="text-white capitalize px-3 text-lg"
                  >
                    {items.text}
                  </Link>
                ) : (
                  <HashLink
                    smooth
                    to="/#contact"
                    className="text-white capitalize px-3 text-lg"
                  >
                    {items.text}
                  </HashLink>
                )}
              </>
            ))}
          </div>
          {/* <div className="-mt-28 flex items-center gap-x-7">
            {name === null ? (
              <>
                <Link to="/login">
                  <button className="text-white">LOG IN</button>
                </Link>
                <Link to="/register">
                  <button
                    style={{
                      borderRadius: "16px 8px 16px 0px",
                      backgroundColor: "#FFD38C",
                    }}
                    className="text-black border py-2 px-5"
                  >
                    REGISTER
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/regEvents" onClick={handleDrawer}>
                  <div className="py-3 px-3 bg-[#eee8aa] text-black uppercase">
                    {name}
                  </div>
                </Link>
                <button
                  className="py-3 px-3 bg-red-600 text-white uppercase"
                  onClick={handleLogOut}
                >
                  log out
                </button>
              </>
            )}
          </div> */}
        </div>
      )}
      {!matches && (
        <>
          <div className="flex flex-col justify-between absolute min-w-full z-9">
            <div
              className={`flex items-starts px-2 justify-between min-w-full`}
            >
              <MenuIcon
                onClick={handleDrawer}
                style={{
                  color: "white",
                  height: "50px",
                  width: "50px",
                  marginTop: "10px",
                }}
              />
              <img src={logo} className="w-64 mt-3" />
            </div>
          </div>
          {openDrawer && (
            <div
              className="flex flex-col pt-[90px] w-[60%] sm:w-[50%] h-screen pl-[20px] pt-[20px] gap-y-[15px] backdrop-blur-lg -pt-30 absolute z-11 "
              style={{ zIndex: 1 }}
            >
              <div className="z-12 absolute left-[8px] top-[0px]">
                <MenuIcon
                  onClick={handleDrawer}
                  style={{
                    color: "white",
                    height: "50px",
                    width: "50px",
                    marginTop: "10px",
                  }}
                />
              </div>
              {navItems.map((items) => (
                <>
                  {items.text !== "CONTACT" ? (
                    <Link
                      to={items.link}
                      className="text-white capitalize px-3 text-lg"
                      onClick={handleDrawer}
                    >
                      {items.text}
                    </Link>
                  ) : (
                    <HashLink
                      smooth
                      to="/#contact"
                      className="text-white capitalize px-3 text-lg"
                      onClick={handleDrawer}
                    >
                      {items.text}
                    </HashLink>
                  )}
                </>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
