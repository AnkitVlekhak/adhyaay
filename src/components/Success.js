import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Success = () => {
  const location = useLocation();
  const u = location.state;
  console.log("Data", u);
  useEffect(() => {
    axios
      .post(
        "https://harsh0p.pythonanywhere.com/email/send/",
        {
          email: u.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        toast("A welcome mail is sent to your email address");
        toast("You can now book for events");
      })
      .catch((err) => {
        console.log(err);
        toast("Internal server error! Please refresh the page");
      });
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-black text-white flex justify-center items-center text-2xl p-10">
        Contact 8445854608, 7618586557 or Whatsapp on 9682843175 :)
      </div>
    </>
  );
};

export default Success;
