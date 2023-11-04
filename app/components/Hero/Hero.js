import "./Hero.css";
import { logo } from "@/app/svgs";
import { hero } from "@/app/data";
import { motion } from "framer-motion"
import Link from "next/link";

function Hero() {


  return (
    
    <div className="hero-container">
      
      <div className="hero-logo">
        {logo}
        <motion.span whileHover={{ scale: 1.1}} 
        className="hero-logo-text">AR Space</motion.span>
      </div>
      <div className="hero-content">
        <p className="hero-description">
        {hero.catch_line}
        </p>
      </div>

        <div className="button-group">
            <button className="button hero-button">Localization</button>
            <span className="divider"></span>
            <Link href={'/geo_spatial'}><button className="button hero-button">Geo-Spatial</button></Link>
        </div>

    </div>
  )
}

export default Hero
