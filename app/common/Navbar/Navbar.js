import Link from "next/link";
import "./Navbar.css";
import { logo } from "@/app/svgs";
function Navbar() {
  return (
    <div className="nav-container">
      <nav>
        {/* <Link href={"/"}>   */}
          <Link href={"/"} className="nav-logo">
            {logo}
            <span className="nav-logo-text">AR Space</span>
          </Link>
        {/* </Link> */}
        <div className="nav-menu">
          <Link href={"#"}>Login</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
