import React from "react";
import Carousel from "./Carousel";
import { Developers, heads, ofc, og } from "./TeamAdhyaay";

const Team = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <p
        style={{
          color: "#ffd38c",
          textAlign: "center",
          paddingTop: 100,
          paddingBottom: 20,
          textTransform: "uppercase",
        }}
        className="text-3xl"
      >
        Secretaries
      </p>
      <div style={{ paddingBottom: 30, paddingLeft: 30 }}>
        <Carousel arr={og} />
      </div>
      <p
        style={{
          color: "#ffd38c",
          textAlign: "center",
          paddingBottom: 20,
          textTransform: "uppercase",
        }}
        className="text-3xl"
      >
        Fest Coordinators
      </p>
      <div style={{ paddingBottom: 30, paddingLeft: 30 }}>
        <Carousel arr={ofc} />
      </div>
      <p
        style={{
          color: "#ffd38c",
          textAlign: "center",
          paddingBottom: 20,
          textTransform: "uppercase",
        }}
        className="text-3xl"
      >
        Developers
      </p>
      <div style={{ paddingBottom: 30, paddingLeft: 30 }}>
        <Carousel arr={Developers} />
      </div>
      <p
        style={{
          color: "#ffd38c",
          textAlign: "center",
          paddingBottom: 20,
          textTransform: "uppercase",
        }}
        className="text-3xl"
      >
        Heads
      </p>
      <div style={{ paddingBottom: 30, paddingLeft: 30 }}>
        <Carousel arr={heads} />
      </div>
    </div>
  );
};

export default Team;
