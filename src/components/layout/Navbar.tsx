import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {

    const navItems = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Education",   // ✅ added
        "Experience",
        "Certifications",
        "Contact"
    ];

    return (

        <header className="navbar">

            <div className="nav-container">

                {/* Logo */}
                <div className="logo">
                    Jeshmitha S
                </div>

                {/* Navigation */}
                <nav className="nav-links">

                    {
                        navItems.map((item) => (

                            <Link
                                key={item}
                                to={item.toLowerCase()}   // ⚠️ IMPORTANT (matches section id)
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                activeClass="active"
                            >
                                {item}
                            </Link>

                        ))
                    }

                </nav>

                {/* Resume Button */}
{/* Resume Button */}
<a
    href="/images/Jeshmitha S Resume.pdf"
    download="Jeshmitha_S_Resume.pdf"
    className="resume-btn"
>
    Resume
</a>

            </div>

        </header>

    );
};

export default Navbar;