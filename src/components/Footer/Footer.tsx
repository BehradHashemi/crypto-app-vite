import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer(props: any) {
  return (
    <div className="Footer">
      <div className="footer-main">
        <p className="footer-copyright">
         <a href="https://instagram.com/fronckteam/" target="_blank"> © {new Date().getFullYear()} FronckTeam. All rights reserved</a>
        </p>
      </div>

      <div className="footer-dir">
        <div className="dir-col">
          <p className="dir-title">Products</p>
          <div className="dir-list">
            <p className="dir-item">
              <Link className="nav-link" to="/">
              FronckCrypto
              </Link>
            </p>
            <p className="dir-item">
              <Link className="nav-link" to="/news">
                CryptoNews
              </Link>
            </p>
            <p className="dir-item">
              <Link className="nav-link" to="/portfolio">
                CryptoPortfolio
              </Link>
            </p>
            <p className="dir-item">
              <Link className="nav-link" to="/widgets">
                CryptoWidgets
              </Link>
            </p>
          </div>
        </div>
        <div className="dir-col">
          <p className="dir-title">Company</p>
          <div className="dir-list">
            <p className="dir-item">
              <a
                className="nav-link"
                href="https://github.com/BehradHashemi/"
                target="_blank"
                rel="noopener"
              >
                Github
              </a>
            </p>
            <p className="dir-item">
              <a className="nav-link" href="https://github.com/BehradHashemi/">
                About
              </a>
            </p>
          </div>
        </div>
        <div className="dir-col">
          <p className="dir-title">Support</p>
          <div className="dir-list">
            <p className="dir-item">
              <a className="nav-link" href="">
                Request Form
              </a>
            </p>
            <p className="dir-item">
              <a className="nav-link" href="">
                FAQ
              </a>
            </p>
            <p className="dir-item">
              <a className="nav-link" href="">
                Glossary
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
