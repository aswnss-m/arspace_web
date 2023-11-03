import Link from "next/link";
import "./Navbar.css";
import { logo } from "@/app/svgs";
function Navbar() {
  
    return (
      <div className="nav-container">
        <nav>
        <div className="nav-logo">
          {logo}
          <span className="nav-logo-text">Arspace</span>
        </div>
        <div className="nav-menu">
          <Link href={'#'}>Login</Link>
        </div>
      </nav>
      </div>
      )
}

export default Navbar
