import { Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import Instagram from "@mui/icons-material/Instagram";

const Contact = () => {
  return (
    <div className="contact" style={{ color: "white", overflowY: "hidden" }}>
      <p
        style={{
          marginTop: "60px",
          color: "#f9fd50",
          marginleft: "30px",
          fontSize: "50px",
          marginLeft: "20px",
          borderBottom: "0.5px solid wheat",
        }}
      >
        Contact Us
      </p>
      <p
        style={{
          marginTop: "20px",
          color: "#f9fd50",
          marginleft: "30px",
          fontSize: "20px",
          marginLeft: "20px",
        }}
      >
        Youtube Channel :{" "}
        <a
          target="blank"
          style={{ textDecoration: "none" }}
          href="https://youtube.com/@adhyaayhbtu7010"
        >
          Adhyaay HBTU
        </a>
      </p>
      <p
        style={{
          marginTop: "6px",
          color: "#f9fd50",
          marginleft: "30px",
          fontSize: "20px",
          marginLeft: "20px",
        }}
      >
        {" "}
        Email: culturalsubcouncil@hbtu.ac.in
      </p>
      <p
        style={{
          marginTop: "6px",
          color: "#f9fd50",
          marginleft: "30px",
          fontSize: "20px",
          marginLeft: "20px",
        }}
      >
        Contact no-{" "}
        <ul style={{ marginLeft: "30px", marginTop: "5px" }}>
          <li>Tushar Garg : 7618586557 </li>
          <li>Atishay Jain : 8445854608 </li>
        </ul>
      </p>
    </div>
  );
};

export default Contact;
