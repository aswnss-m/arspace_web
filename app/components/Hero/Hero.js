import "./Hero.css";
import { logo } from "@/app/svgs";
import { hero } from "@/app/data";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-logo">
        {logo}
        <span className="hero-logo-text">Arspace</span>
      </div>
      <div className="hero-content">
        <p className="hero-description">
        {hero.catch_line}
        </p>
      </div>
    </div>
  )
}

export default Hero
