import "./Footer.css"
import Link from "next/link"
import {wave, web, instagram, x} from "@/app/svgs"
function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-bg">
                {wave} </div>
            <div className="footer-content">
                <div className="footer-heading">AR Space</div>
                <ul className="footer-links">
                    <li className="footer-link">
                        <Link href={'https://www.softservedweb.com'}>
                            {web}
                        </Link>
                    </li>
                    <li className="footer-link">
                        <Link href={'https://www.instagram.com/softservedweb'}>
                            {instagram}
                        </Link>
                    </li>
                    <li className="footer-link">
                        <Link href={'https://www.x.com/softservedweb'}>
                            {x}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
