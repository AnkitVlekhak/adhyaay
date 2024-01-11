/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const EventDetail = () => {
  const route = useLocation();
  const { des, name, img } = route.state;
  // console.log("Description",des)

  return (
    <div
      className="p-10"
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
    <img src={img} className="eventImg pt-20 w-1/3" />
    <div className="w-2/3 pt-[6vw] flex flex-col items-center">
      <h1 style={{ color: "#dbba89", marginTop: 20 }} className="text-center text-6xl font-semibold font-serif tracking-wide">{name}</h1>
      <p
        className="text-2xl text-[#dbba89] mt-10 w-[85%]"
        style={{
          padding: 30,
        }}
      >
        {des}
      </p>
    </div>      
    </div>
  );
};

export default EventDetail;
