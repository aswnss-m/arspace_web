import "./Hero.css";
import { logo } from "@/app/svgs";
import { hero } from "@/app/data";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-logo">
        {logo}
        <span className="hero-logo-text">AR Space</span>
      </div>
      <div className="hero-content">
        <p className="hero-description">
        {hero.catch_line}
        </p>
      </div>
        <div className="button-group">
            <button className="button hero-button">Localization</button>
            <span className="divider"></span>
            <button className="button hero-button">Geo-Spatial</button>
        </div>
    </div>
  )
}

export default Hero
