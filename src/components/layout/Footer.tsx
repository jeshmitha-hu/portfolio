import "./footer.css";

import
{
FaEnvelope,
FaGithub,
FaLinkedin
}
from "react-icons/fa";

const Footer = () =>
{

return (

    <footer className="footer">

        <div className="footer-container">

            <div className="footer-divider"></div>

            <h2 className="footer-title">

                Thank You For Visiting.

            </h2>

            <p className="footer-subtitle">

                Let's transform data into meaningful insights.

            </p>

            <div className="footer-social">

                <a

                    href="mailto:jeshmithasrinivas@gmail.com"

                    aria-label="Email"

                >

                    <FaEnvelope />

                </a>

                <a

                    href="https://github.com/jeshmitha-hu"

                    target="_blank"

                    rel="noreferrer"

                    aria-label="GitHub"

                >

                    <FaGithub />

                </a>

                <a

                    href="https://www.linkedin.com/in/jeshmitha-s-77747034a"

                    target="_blank"

                    rel="noreferrer"

                    aria-label="LinkedIn"

                >

                    <FaLinkedin />

                </a>

            </div>

        </div>

    </footer>

);


};

export default Footer;