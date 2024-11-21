import { Link } from "react-router-dom";
import gitHubIcon from "../assets/github-icon-100px.png"
import logoText from "../assets/logo-text-only.png"
import "./Footer.css"

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="copyright-div">
                    <img src={logoText} alt="WatchValut Logo" width="15%" />
                    <p>Copyright © 2024 DKD Studios </p>
                </div>
                <div className="info-div">
                    <div className="member-names">
                            <p>Kara Jelley</p>
                        <p>|</p>
                            <p>Dani Di Donato</p>
                        <p>|</p>
                            <p>Diego Cisneros</p>
                    </div>
                </div>
                <div className="github-div">
                    <Link className="member-links github-div" to="https://github.com/didonatodani/dkd-project">
                        <img src={gitHubIcon} alt="github Logo" width="5%" />
                        <p>Project Github</p>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
