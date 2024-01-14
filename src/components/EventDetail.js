/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const EventDetail = () => {
  const route = useLocation();
  const { des, name, img } = route.state;
  // console.log("Description",des)

  return (
    <div
      className="p-10 flex-col lg:flex-row items-center lg:items-start"
      style={{
        backgroundColor: "black",
        backgroundPosition: "center",
        objectFit: "scale-down",
        minHeight: "100vh",
        overflowY: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={img} className="eventImg pt-20"
      style={{ width:"40vw", maxHeight: "730px",borderRadius:"20px"  }}
      />
      <h1 style={{ color: "#f9fd50", marginTop: 20, fontSize:"25px" }}>{name}</h1>
    <img src={img} className="eventImg pt-20 w-2/3 lg:w-1/3 " />
    <div className="w-[95%] lg:w-2/3 pt-[6vw] flex flex-col items-center ">
      <h1 style={{ color: "#dbba89", marginTop: 20 }} className="text-center text-4xl lg:text-6xl font-semibold font-serif tracking-wide">{name}</h1>
      <p
        className="text-lg lg:text-2xl p-2 pt-4 lg:p-[30px] text-[#dbba89] lg:mt-10 w-full lg:w-[85%]"
        style={{
          // padding: 30,
        }}
      >
        {des}
      </p>
    </div>      
    </div>
  );
};

export default EventDetail;
