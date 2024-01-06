/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import bg from "../assets/bg.png";
import bgMobile from "../assets/bgMobile.png";
import logo from "../assets/logo.jpg";
import darshan from "../assets/darshan.jpg";
import darshanText from "../assets/darshanText.jpeg";
import rhea from "../assets/rheaText.jpeg";
import rhe from "../assets/rhe.jpg";
import djsins from "../assets/djsins.png";
import sins from "../assets/sins.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Home = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <>
      <div
        className="flex justify-center min-h-screen bg-cover pb-20"
        style={{
          backgroundImage: matches ? `url('${bg}')` : `url('${bgMobile}')`,
          backgroundColor: "black",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-[140px] flex flex-col z-9 items-center">
          <img src={logo} width={300} />
          <p className="text-white text-center text-[30px]">14-16 APRIL</p>
          <p className="text-white text-center text-[40px] sm:text-[48px] font-bold">
            ADHYAAY' 22
          </p>
          <p className="text-center text-[20px] md:text-[70px] embrasser font-bold">
            Embrasser les différences
          </p>
          {/* <Link to="https://imjo.in/RjAkfq">
            <button
              className="text-[#FFD38C] mt-[70px] border-2 py-4 px-5 border-[#FFD38C] font-bold"
              style={{ borderRadius: "24px 16px 24px 0px" }}
               onClick={() => navigate("/register")}
            >
              REGISTER NOW
            </button>
          </Link> */}
        </div>
      </div>
      <div
        className="border-t-2 border-b-2 border-[#FFD38C] flex justify-between items-center bg-black min-w-full py-10 px-[10px] md:px-20"
        id="falls"
      >
        <div>
          <p className="text-[#FFD38C] text-center text-xl md:text-4xl font-extrabold">
            50+
          </p>
          <p className="text-[#FFD38C] text-center text-lg md:text-2xl">
            Events
          </p>
        </div>
        <div>
          <p className="text-[#FFD38C] text-center text-2xl md:text-4xl font-extrabold">
            15000+
          </p>
          <p className="text-[#FFD38C] text-center text-lg md:text-2xl">
            Footsteps
          </p>
        </div>
        <div>
          <p className="text-[#FFD38C] text-center text-2xl md:text-4xl font-extrabold">
            3
          </p>
          <p className="text-[#FFD38C] text-center text-lg md:text-2xl">Days</p>
        </div>
        <div>
          <p className="text-[#FFD38C] text-center text-2xl md:text-4xl font-extrabold">
            3+
          </p>
          <p className="text-[#FFD38C] text-center text-lg md:text-2xl">
            Artists
          </p>
        </div>
      </div>
      <div className="bg-[#212122] flex flex-col items-center">
        <p className="text-center text-[#ffd38c] text-4xl pt-24 font-bold uppercase">
          About
        </p>
        <p className="text-[#ffd38c] text-center px-[40px] sm:px-28 py-20 text-lg ">
          Adhyaay is an upcoming cultural event that will take place at HBTU
          Kanpur, organized by the Cultural Sub-Council of USAC HBTU in
          collaboration with various other sub-councils. This event is poised to
          be a memorable experience for students with an exciting range of
          activities and events that are lined up. The diverse range of events
          at Adhyaay promises to be a cultural extravaganza that will stay with
          students for years to come. The event provides a platform for students
          to participate and be a part of something great, encouraging them to
          push their boundaries and explore their talents. From recreational
          activities to opportunities for personal growth, Adhyaay has something
          to offer for everyone. This event not only promises to be an exciting
          experience but also a great opportunity for students to learn, grow
          and connect with like-minded individuals. In conclusion, Adhyaay is an
          event that promises to be a vibrant celebration of culture,
          creativity, and talent. The event is a testimony to the passion and
          dedication of the organizers and is sure to be a memorable experience
          for all those who attend.
        </p>
      </div>
      <div
        className=" flex flex-col items-center footer border-t-2 border-[#FFD38C]"
        style={{ backgroundColor: "black" }}
      >
        <p className="text-center text-[#ffd38c] text-4xl pt-24 font-bold uppercase">
          Highlights
        </p>
        <div className="flex flex-col flex-wrap min-w-[100%] md:flex-row justify-around items-center pt-16">
          <img
            src={darshanText}
            width={400}
            className="lg:left-0 lg:relative"
          />
          <img
            src={darshan}
            width={500}
            className="-mt-[120px] md:mt-0 lg:ml-[0px]"
          />
        </div>
        <div className="flex flex-col flex-wrap min-w-[100%] justify-around md:flex-row items-center py-16">
          <img src={rhea} width={400} className="lg:left-0 lg:relative" />
          <img
            src={rhe}
            width={500}
            className="-mt-[100px] md:mt-0 lg:ml-[0px]"
          />
        </div>
        <div className="flex flex-col flex-wrap min-w-[100%] justify-around md:flex-row items-center py-16">
          <img src={djsins} width={400} className="lg:left-0 lg:relative" />
          <img
            src={sins}
            width={500}
            className="-mt-[100px] md:mt-0 lg:ml-[0px]"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
