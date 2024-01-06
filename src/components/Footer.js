import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Email } from "@mui/icons-material";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from "@mui/icons-material/GitHub";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <HashLink smooth to="/#contact">
      <div
        className="footer min-h-[250px] border-t-2 border-[#FFD38C] bg-[#212122]"
        id="contact"
      >
        <div className="footer-trailer" style={{ minWidth: "0px" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/66LEKYzwido"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="footer-contact flex flex-col sm:flex-row gap-[20px]">
          <div className="follow">
            <h3 style={{ color: "white", fontSize: 20 }}>Keep Connected</h3>
            <div className="follow-app pl-[20px] sm:pl-0 sm:mt-[20px]">
              <Link
                to="https://youtube.com/@adhyaay22"
                style={{ color: "white" }}
              >
                {" "}
                <YouTubeIcon style={{ color: "#eee8aa", fontSize: 30 }} />
              </Link>
              <p style={{ color: "white" }}>Subscribe us on Youtube </p>
            </div>
            <div className="follow-app pl-[20px] sm:pl-0">
              <Link
                to="https://instagram.com/adhyaay_22?igshid=YmMyMTA2M2Y=';"
                style={{ color: "white" }}
              >
                {" "}
                <InstagramIcon style={{ color: "#eee8aa", fontSize: 30 }} />
              </Link>
              <p style={{ color: "white" }}>Follow us on Instagram </p>

              {/* <h3 style={{ color: "white", marginBottom: "30px", fontSize: 20 }}>
              Contact us
            </h3>
            <p>Tushar Garg : 7618586557 </p>
            <p>Atishay Jain : 8445854608</p> */}
            </div>
          </div>
          <div className="email">
            <div className="follow-app">
              <Email style={{ color: "#eee8aa", fontSize: 30 }} />
              <p style={{ color: "white", fontSize: 20 }}>Email Us at :</p>
            </div>
            <a
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "18px",
                marginLeft: "20px",
              }}
              href="mailto:culturalsubcouncil@hbtu.ac.in"
            >
              culturalsubcouncil@hbtu.ac.in
            </a>
            <div className="follow-app mt-[10px]">
              <CallIcon style={{ color: "#eee8aa", fontSize: 30 }} />
              <p
                style={{
                  marginTop: "6px",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Contact no-{" "}
              </p>
            </div>
            <ul
              style={{ marginLeft: "20px", color: "white", marginTop: "5px" }}
            >
              <li>Atishay Jain : 8445854608 </li>
              {/* <li>Tushar Garg : 7618586557 </li> */}
              <li>Pranjal Dhar Dwivedi : 9648140236 </li>
            </ul>
          </div>
        </div>
        <Link to="https://github.com/Raunak173">
          <GitHubIcon style={{ color: "#eee8aa", fontSize: 30 }} />
        </Link>
      </div>
    </HashLink>
  );
};

export default Footer;
