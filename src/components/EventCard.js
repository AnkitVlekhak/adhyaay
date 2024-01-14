/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ name, des, img, id }) => {
  return (
    
    <Link
      style={{
        textDecoration: "none",
        width: 300,
        height: 350,
        color: "#f9fd50",
        backgroundImage: `url('${img}')`,
        borderRadius: "0px 64px 64px 64px",
        transform: "scale(1)",
        backgroundSize: "cover",
        margin: 30,
        backgroundPosition: "center",
      }}
      to={`/event/${name}`}
      state={{ des: des, name: name, img: img }}
    >
      <div
        className="bg-black absolute py-5 bottom-0 min-w-full opacity-80"
        style={{ borderRadius: "0px 0px 64px" }}
      >
        <p className="text-[#eee8aa] text-center font-semibold text-xl">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default EventCard;
