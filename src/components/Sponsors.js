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
import AOS from 'aos';
import React,{useEffect} from "react";
import 'aos/dist/aos.css'; 



const Sponsors = () => {
  const logos = [l8, l9, l10, l11, l12, l13, l14, l15];
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 pt-32 min-h-screen flex flex-col items-center">
      <p className="text-white font-bold text-3xl uppercase">Prime Sponsors</p>
      <div className="flex flex-wrap justify-center px-20 py-10" >
        {[
          { src: l1, alt: 'Realme Logo' },
          { src: l2, alt: 'Rim Jhim' },
          { src: l3, alt: 'Download' },
          { src: tsh, alt: 'TSH' },
        ].map((logo, index) => (
          <div key={index} className="w-[250px] md:w-[250px] h-[250px] mx-4 my-4 overflow-hidden rounded-lg bg-white p-2">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-fit rounded-lg"
              data-aos="fade-up"
            />
          </div>
        ))}
      </div>
      <p className="text-white font-bold text-3xl uppercase">Gold Sponsor</p>
      <div className="flex flex-wrap justify-center px-20 py-10" data-aos="fade-up">
        <div className="w-[300px] md:w-[300px] h-[300px] mx-4 my-4 overflow-hidden rounded-lg bg-white p-2">
          <img
            src={l7}
            alt="KAMD"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <p className="text-white font-bold text-3xl uppercase">
      Enti. Partner
    </p>
    <div className="flex flex-wrap justify-center px-20 py-10" data-aos="fade-up">
        <div className="w-[410px] md:w-[300px] h-[250px] mx-4 my-4 overflow-hidden object-fit  p-2">
          <img
            src={l5}
            alt="KAMD"
            className="w-full h-full object-fit rounded-lg"
          />
        </div>
      </div>
    
      <p className="text-white font-bold text-3xl uppercase" >
        Hospitality Partner
      </p>
      <div className="flex flex-wrap justify-center px-20 py-10" data-aos="fade-up">
        <img
          src={l16}
          className="w-[350px] md:w-[400px] md:h-[250px]"
          style={{ padding: 20 }}
        />
      </div>
      <p className="text-white font-bold text-3xl uppercase">Radio Partner</p>
      <div className="flex flex-wrap justify-center px-20 py-10" data-aos="fade-up">
        <div className="w-[300px] md:w-[300px] h-[300px] mx-4 my-4 overflow-hidden rounded-lg bg-white p-2">
          <img
            src={l6}
            alt="KAMD"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <p className="text-white font-bold text-3xl uppercase">Beverage Partner</p>
      <div className="flex flex-wrap justify-center px-20 py-10" data-aos="fade-up">
        <img
          src={l4}
          className="w-[350px] md:w-[400px] md:h-[250px]"
          style={{ padding: 20 }}
        />
      </div>
      <p className="text-white font-bold text-3xl uppercase">Co Sponsors</p>
      <div className="flex flex-wrap justify-center px-20 py-10" >
        {[
          { src: l8, alt: 'Realme Logo' },
          { src: l9, alt: 'Rim Jhim' },
          { src: l10, alt: 'Download' },
          { src: l11, alt: 'TSH' },
          { src: l12, alt: 'TSH' },
          { src: l13, alt: 'TSH' },
          { src: l14, alt: 'TSH' },
          { src: tsh, alt: 'TSH' },

        ].map((logo, index) => (
          <div key={index} className="w-[250px] md:w-[250px] h-[250px] mx-4 my-4 overflow-hidden rounded-lg bg-white p-2">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-fit rounded-lg"
              data-aos="fade-up"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
