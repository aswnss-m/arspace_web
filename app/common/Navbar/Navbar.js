"use client";
import Link from "next/link";
import "./Navbar.css";
import { usePathname } from "next/navigation";
import { logo } from "@/app/svgs";

function Navbar() {
  const hide = usePathname() === "/localization/components/EditBar" ? false : true;
  return (
    <div className={hide ? 'nav-container' : 'hidden'}>
      <nav>
        {/* <Link href={"/"}>   */}
          <Link href={"/"} className="nav-logo">
            {logo}
            <p className="nav-logo-text">AR Space</p>
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
