import "./Hero.css";
import { hero } from "@/app/data";
import Link from "next/link";

function Hero() {
  return (
    <div className="hero-container">

      <div className="hero-title">
        <h1 className="heroTitleText">Design Your own <span className="hoverEffectToPurple">AR Space</span></h1>
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

export default Hero;
