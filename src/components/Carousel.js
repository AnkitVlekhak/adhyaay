/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import styles from "../Styles/carousel.module.css";
import indman from "../assets/man.jpg";

const Carousel = ({ arr }) => {


  
  return (
    <div
    
      className="team"
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {arr.map((profile, i) => (
        <div  
          key={i}
          style={{
            backgroundImage: `url(${indman})`,

            width: 300,
            height: 400,
            margin: 30,
            transform: "scale(1)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 36,
          }}
          className={styles.team_card}
          
        >
          <div
            style={{
              backgroundColor: "black",
              opacity: 0.7,
              position: "absolute",
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 300,
              flexDirection: "column",
              paddingTop: 20,
              paddingBottom: 20,
            }}
            className={styles.team_box}
            
          >
            <Typography
              variant="h6"
              color={"#ffd38c"}
              style={{
                textAlign: "center",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              {profile.Designation}
            </Typography>
            <Typography
              variant="h5"
              color={"#ffd38c"}
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {profile["Name:"]}
            </Typography>
            <div className={`flex items-center gap-x-5 mt-3 ${styles.team_name}`}>
              <Link to={profile["Instagram :"]}>
                <img src={insta} width={30} />
              </Link>
              <Link to={profile["Linkedln :"]}>
                <img src={linkedin} width={30} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
