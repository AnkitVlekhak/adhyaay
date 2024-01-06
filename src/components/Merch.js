/* eslint-disable jsx-a11y/alt-text */
import merch from "../assets/merch.jpg";

const Merch = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <img className="img" src={merch} style={{ marginTop: 100 }}></img>
    </div>
  );
};

export default Merch;
