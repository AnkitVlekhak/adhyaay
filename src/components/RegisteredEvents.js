import axios from "axios";
import React, { useEffect } from "react";

const RegisteredEvents = () => {
  const token = localStorage.getItem("Token");
  useEffect(() => {
    console.log("Token", token);
    axios
      .post(
        "https://harsh0p.pythonanywhere.com/auth/retrieve/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          data: {},
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="min-h-screen bg-black text-[#eee8aa] flex flex-col items-center pt-32 text-3xl uppercase">
      Registered Events
    </div>
  );
};

export default RegisteredEvents;
