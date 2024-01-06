/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const EventDetail = () => {
  const route = useLocation();
  const { des, name, img } = route.state;
  // console.log("Description",des)

  return (
    <div
      style={{
        backgroundColor: "black",
        backgroundPosition: "center",
        objectFit: "scale-down",
        minHeight: "100vh",
        overflowY: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={img} className="eventImg pt-20" />
      <h1 style={{ color: "#f9fd50", marginTop: 20 }}>{name}</h1>
      <p
        style={{
          color: "#f9fd50",
          fontSize: "20px",
          padding: 30,
        }}
      >
        {des}
      </p>
    </div>
  );
};

export default EventDetail;
