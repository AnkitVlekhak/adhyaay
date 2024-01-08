import { useRef, useState } from "react";
import Carousel from "./Carousel";
import { Developers, heads, ofc, og } from "./TeamAdhyaay";


const Team = () => {

  const [sel, setSel] = useState("SECRETARIES");
  const secondDivRef = useRef(null);
  const handleItemClick = (selectedItem) => {
    setSel(selectedItem);
    const multipliers = [0, 600, 850, 900]
    const itemIndex = ["SECRETARIES", "COORDINATORS", "DEVELOPERS", "HEADS"].indexOf(selectedItem);
    if (itemIndex >= 0 && itemIndex < multipliers.length) {
      const scrollMultiplier = multipliers[itemIndex];
      const scrollPosition = itemIndex * scrollMultiplier;

      const secondDiv = secondDivRef.current;
      if (secondDiv) {
        secondDiv.scrollTop = scrollPosition;
      }
    }
  };


  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", backgroundColor: "black" }}>
      <div style={{ width: "30%", height: "60%", backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #ffd38c", marginTop: "10vw" }}>
        <div style={{ width: '100%', height: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "5vw", }}>
          <div style={{ width: '95%', height: '60%', paddingLeft: "10px" }}>
            <div style={{ width: '100%', display: 'flex' }}>
              <div style={(sel === "SECRETARIES") ? { width: '1%', backgroundColor: 'orange', marginRight: '1rem', borderTopRightRadius: '0.5rem', borderTopLeftRadius: '0.5rem', transition: "all    cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" } : { width: '1%', backgroundColor: 'gray', marginRight: '1rem', borderTopRightRadius: '0.5rem', borderTopLeftRadius: '0.5rem', transition: "all  cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" }}>
              </div>
              <h1 style={(sel === "SECRETARIES") ? { width: '90%', fontSize: '3vw', color: 'white', fontWeight: 'bold', textTransform: 'capitalize', transition: "all  cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" } : { width: '90%', fontSize: '3vw', color: 'gray', fontWeight: 'bold', textTransform: 'capitalize', transition: "all  cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" }}
                onClick={() => handleItemClick("SECRETARIES")}
              >
                SECRETARIES
              </h1>
            </div>
            <div style={{ width: '100%', display: 'flex' }}>
              <div style={(sel === "COORDINATORS") ? { width: '1%', backgroundColor: 'orange', marginRight: '1rem', borderTopRightRadius: '0.5rem', borderTopLeftRadius: '0.5rem', transition: "all  cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" } : { width: '1%', backgroundColor: 'gray', marginRight: '1rem', borderTopRightRadius: '0.5rem', borderTopLeftRadius: '0.5rem', transition: "all  cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" }}></div>
              <h1 style={(sel === "COORDINATORS") ? { width: '90%', fontSize: '3vw', color: 'white', fontWeight: 'bold', textTransform: 'capitalize', transition: "all  cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" } : { width: '90%', fontSize: '3vw', color: 'gray', fontWeight: 'bold', textTransform: 'capitalize', transition: "all  cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" }} onClick={() => handleItemClick("COORDINATORS")}>COORDINATORS</h1>
            </div>
            <div style={{ width: '100%', display: 'flex' }}>
              <div style={(sel === "DEVELOPERS") ? { width: '1%', backgroundColor: 'orange', marginRight: '1rem', borderTopRightRadius: '0.5rem', borderTopLeftRadius: '0.5rem', transition: "all  cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" } : { width: '1%', backgroundColor: 'gray', marginRight: '1rem', borderTopRightRadius: '0.5rem', borderTopLeftRadius: '0.5rem', transition: "all  cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" }}></div>
              <h1 style={(sel === "DEVELOPERS") ? { width: '90%', fontSize: '3vw', color: 'white', fontWeight: 'bold', textTransform: 'capitalize', transition: "all  cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" } : { width: '90%', fontSize: '3vw', color: 'gray', fontWeight: 'bold', textTransform: 'capitalize', transition: "all  cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" }} onClick={() => handleItemClick("DEVELOPERS")}
              >DEVELOPERS
              </h1>
            </div>
            <div style={{ width: '100%', display: 'flex' }}>
              <div style={(sel === "HEADS") ? { width: '1%', backgroundColor: 'orange', marginRight: '1rem', borderTopRightRadius: '0.5rem', borderTopLeftRadius: '0.5rem', transition: "all  cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" } : { width: '1%', backgroundColor: 'gray', marginRight: '1rem', borderTopRightRadius: '0.5rem', borderTopLeftRadius: '0.5rem', transition: "all  cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" }}></div>
              <h1 style={(sel === "HEADS") ? { width: '90%', fontSize: '3vw', color: 'white', fontWeight: 'bold', textTransform: 'capitalize', transition: "all  cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" } : { width: '90%', fontSize: '3vw', color: 'gray', fontWeight: 'bold', textTransform: 'capitalize', transition: "all  cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s" }} onClick={() => handleItemClick("HEADS")}>HEADS</h1>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "70%", height: "100vh", overflow: "hidden", overflowY: "scroll", }} ref={secondDivRef}>
        <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
          <p
            style={{
              color: "#ffd38c",
              textAlign: "center",
              paddingTop: 100,
              paddingBottom: 20,
              textTransform: "uppercase",
              fontSize: "3.5rem",
              fontWeight: "bold",
            }}

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
              fontSize: "3.5rem",
              fontWeight: "bold",
            }}
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
              fontSize: "3.5rem",
              fontWeight: "bold",
            }}
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
              fontSize: "3.5rem",
              fontWeight: "bold",
            }}
          >
            Heads
          </p>
          <div style={{ paddingBottom: 30, paddingLeft: 30 }}>
            <Carousel arr={heads} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
