import "./contact.css";

import
{
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
    FaLocationDot
}
from "react-icons/fa6";

const Contact = () =>
{

    return (

        <section

            id="contact"

            className="contact"

        >

            <div className="contact-header">

                <span className="contact-tag">

                    CONTACT

                </span>

                <h2>

                    Let's
                    <span> Connect</span>

                </h2>

                <p>

                    I'm actively seeking full-time opportunities as a
                    Data Analyst or Business Intelligence Analyst.
                    Whether you have an exciting opportunity,
                    collaboration, or simply want to connect,
                    I'd be delighted to hear from you.

                </p>

            </div>

            <div className="availability">

                <span className="availability-dot"></span>

                Available for Full-Time Opportunities

            </div>

            <div className="contact-card">

                <div className="contact-item">

                    <FaEnvelope className="icon"/>

                    <div>

                        <h4>Email</h4>

                        <a href="mailto:jeshmithasrinivas@gmail.com">

                            jeshmithasrinivas@gmail.com

                        </a>

                    </div>

                </div>

                <div className="contact-item">

                    <FaPhone className="icon"/>

                    <div>

                        <h4>Phone</h4>

                        <a href="tel:+918754358400">

                            +91 8754358400

                        </a>

                    </div>

                </div>

                <div className="contact-item">

                    <FaLocationDot className="icon"/>

                    <div>

                        <h4>Location</h4>

                        <p>

                            Bengaluru, Karnataka, India

                        </p>

                    </div>

                </div>

                <div className="contact-item">

                    <FaGithub className="icon"/>

                    <div>

                        <h4>GitHub</h4>

                        <a

                            href="https://github.com/jeshmitha-hu"

                            target="_blank"

                            rel="noreferrer"

                        >

                            View GitHub →

                        </a>

                    </div>

                </div>

                <div className="contact-item">

                    <FaLinkedin className="icon"/>

                    <div>

                        <h4>LinkedIn</h4>

                        <a

                            href="https://www.linkedin.com/in/jeshmitha-s-77747034a"

                            target="_blank"

                            rel="noreferrer"

                        >

                            View Profile →

                        </a>

                    </div>

                </div>

            </div>

            <a

                href="mailto:jeshmithasrinivas@gmail.com"

                className="contact-button"

            >

                Let's Work Together

            </a>

        </section>

    );

};

export default Contact;