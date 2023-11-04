import "./Hero.css";
import { logo } from "@/app/svgs";
import { hero } from "@/app/data";
import { motion } from "framer-motion";
import Link from "next/link";



function Hero() {
  return (
    <div className="hero-container">
      {/* <div className="star-layer" id="stars"></div>
        <div className="star-layer" id="stars2"></div>
        <div className="star-layer" id="stars3"></div>
       */}
      {/* <div className="hero-logo">
        {logo}
        <span className="hero-logo-text">
          AR Space
        </span>
      </div> */}

      <div className="hero-title">
        <h1 className="heroTitleText">Design Your own AR Space</h1>
        <div className="hero-content">
          <p className="hero-description">{hero.catch_line}</p>
        </div>
      </div>

      {/* <div className="image-stars"></div> */}

      <div className="button-group">
        <Link href={"/localization"}>
          <button className="button hero-button">Localization</button>
        </Link>
        <span className="divider"></span>
        <Link href={"/geo_spatial"}>
          <button className="button hero-button">Geo-Spatial</button>
        </Link>
      </div>
    </div>
  );
}

// function Hero() {
//   return (
//     <div className="heroContainer">
//       <div className="heroTitleDiv">
//         <h1 className="HeroTitle">Design Your own AR Space</h1>
//         <h4 className="heroSubtitle">
//           Unleash your creativity with our no code tool, easy-to-use tool
//         </h4>
//       </div>

//        <div className="button-group">
//          <Link href={"/localization"}>
//            <button className="button hero-button">Localization</button>
//          </Link>
//          <span className="divider"></span>
//          <Link href={"/geo_spatial"}>
//            <button className="button hero-button">Geo-Spatial</button>
//          </Link>
//       </div>
// </div>
//   );
// }
export default Hero;
