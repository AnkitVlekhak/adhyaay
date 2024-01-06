import { Box, Typography } from "@mui/material";
import Team from "../components/Carousel";

const About = () => {
  return (
    <div className="body">
      <Typography
        variant="h2"
        style={{
          paddingTop: "12px",
          marginLeft: "20px",
          fontFamily: "serif",
          color: "#f9fd50",
          backgroundColor: "black",
          textAlign: "center",
        }}
      >
        About
      </Typography>
      <Typography
        style={{
          fontFamily: "serif",
          color: "#f9fd50",
          paddingLeft: 40,
          paddingRight: 30,
          paddingTop: 20,
        }}
      >
        ADHYAAY is the annual literary-cum-cultural fest of HBTU. It is expected
        that ADHYAAY'23 will have 10,000+ footfalls and hence it will be larger
        than ever. A total of 3 days into Adhyaay will witness various events
        coming from all the sub-councils of HBTU. ADHYAAY brings the combined
        list of events from cultural, literary, hobby and photography
        sub-councils into one bracket
      </Typography>
    </div>
  );
};

export default About;
