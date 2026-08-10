import "./skills.css";

import FadeIn from "../common/FadeIn";
import TechOrbit from "./TechOrbit";

const Skills = () =>
{
    return (

        <FadeIn>

            <section
                id="skills"
                className="skills"
            >

                <div className="skills-container">

                    {/* ==========================================================
                        SECTION HEADER
                    ========================================================== */}

                    <div className="skills-header">

  
                        <h2>

                            My

                            <span className="gradient-text">

                                {" "}TECH STACK

                            </span>

                        </h2>

                        <p>

                            A collection of the technologies, tools and platforms
                            I use to build modern dashboards, data analytics
                            solutions and AI-powered business applications.

                        </p>

                    </div>

                    {/* ==========================================================
                        TECH STACK SECTION
                    ========================================================== */}

                    <TechOrbit />

                </div>

            </section>

        </FadeIn>

    );
};

export default Skills;