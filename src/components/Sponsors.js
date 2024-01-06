/* eslint-disable jsx-a11y/alt-text */
import l1 from "../assets/logos/realme Logo-01.jpg";
import l10 from "../assets/logos/bbbb.jpg";
import l16 from "../assets/logos/PRISTINE.png";
import l4 from "../assets/logos/Storia_logo-01.png";
import l12 from "../assets/logos/bench store.png";
import l5 from "../assets/logos/bw.png";
import l7 from "../assets/logos/kamd.jpeg";
import l8 from "../assets/logos/mm.jpg";
import l9 from "../assets/logos/pb society.png";
import l2 from "../assets/logos/rim jhim.jpg";
import l11 from "../assets/logos/ua.png";
import l6 from "../assets/logos/fm.png";
import l3 from "../assets/logos/download.png";
import tsh from "../assets/logos/tsh.png";
import l13 from "../assets/logos/trends.png";
import l14 from "../assets/logos/reliance-digital-logo-vector.png";
import l15 from "../assets/logos/NAMASTE.jpg";

const Sponsors = () => {
  const logos = [l8, l9, l10, l11, l12, l13, l14, l15];
  return (
    <div className="bg-black pt-32 min-h-screen flex flex-col items-center">
      <p className="text-[#eee8aa] text-3xl uppercase">Prime Sponsors</p>
      <div className="flex flex-wrap justify-center px-20 py-10">
        <img
          src={l1}
          className="w-[350px] md:w-[400px] md:h-[250px]"
          style={{ padding: 20 }}
        />
        <img
          src={l2}
          className="w-[350px] md:w-[400px] md:h-[250px]"
          style={{ padding: 20 }}
        />
        <img
          src={l3}
          className="w-[350px] md:w-[400px] md:h-[250px]"
          style={{ padding: 20 }}
        />
        <img
          src={tsh}
          className="w-[350px] md:w-[400px] md:h-[250px]"
          style={{ padding: 20 }}
        />
      </div>
      <p className="text-[#eee8aa] text-3xl uppercase">Gold Sponsor</p>
      <div className="flex flex-wrap justify-center px-20 py-10">
        <img
          src={l7}
          className="w-[350px] md:w-[400px] md:h-[250px]"
          style={{ padding: 20 }}
        />
      </div>
      <p className="text-[#eee8aa] text-3xl uppercase text-center">
        Entertainment Partner
      </p>
      <div className="flex flex-wrap justify-center px-20 py-10">
        <img
          src={l5}
          className="w-[350px] md:w-[400px] md:h-[250px]"
          style={{ padding: 20 }}
        />
      </div>
      <p className="text-[#eee8aa] text-3xl uppercase text-center">
        Hospitality Partner
      </p>
      <div className="flex flex-wrap justify-center px-20 py-10">
        <img
          src={l16}
          className="w-[350px] md:w-[400px] md:h-[250px]"
          style={{ padding: 20 }}
        />
      </div>
      <p className="text-[#eee8aa] text-3xl uppercase">Radio Partner</p>
      <div className="flex flex-wrap justify-center px-20 py-10">
        <img
          src={l6}
          className="w-[350px] md:w-[400px] md:h-[250px]"
          style={{ padding: 20 }}
        />
      </div>
      <p className="text-[#eee8aa] text-3xl uppercase">Beverage Partner</p>
      <div className="flex flex-wrap justify-center px-20 py-10">
        <img
          src={l4}
          className="w-[350px] md:w-[400px] md:h-[250px]"
          style={{ padding: 20 }}
        />
      </div>
      <p className="text-[#eee8aa] text-3xl uppercase">Co Sponsors</p>
      <div className="flex flex-wrap justify-center px-20 py-10">
        <>
          {logos.map((logo) => (
            <img
              src={logo}
              className="w-[350px] md:w-[400px] md:h-[250px]"
              style={{ padding: 20 }}
            />
          ))}
        </>
      </div>
    </div>
  );
};

export default Sponsors;
