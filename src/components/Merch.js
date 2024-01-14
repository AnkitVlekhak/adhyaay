/* eslint-disable jsx-a11y/alt-text */

import Card from "./Card";
import "./Merch.scss";
import AOS from 'aos';
import React,{useEffect} from "react";
import 'aos/dist/aos.css'; 
const Merch = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  
    const cardsData = [
      {
        name: "Adhyaay T-shirt",
        detail: "A high-top version of the classic T-shirt.",
      },
      {
        name: "Adhyaay Second T-shirt",
        detail: "Description for 2nd T-shirt. Good T-shirt",
      },
      {
        name: "Adhyaay Third T-shirt",
        detail: "Details for the 3rd T-shirt. Good T-shirt",
      },
    ];
  
  return (
    <div className="mine"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        
      }}
    >
     <div className="t-box"  data-aos="fade-up"> {cardsData.map((data, index) => (
      <Card key={index} name={data.name} detail={data.detail} />
    ))}</div>
    </div>
  );
};

export default Merch;
