import "./experience.css";

const Experience = () =>
{
    return (

        <section
            id="experience"
            className="experience"
        >

            {/* ==========================================================
                PROFESSIONAL EXPERIENCE
            ========================================================== */}

            <div className="experience-wrapper">

                <div className="experience-header">



                    <h2>

                        Professional
                        <span> Experience</span>

                    </h2>

                    <p>

                        Applying analytical knowledge to solve real-world
                        business challenges through data analytics,
                        business intelligence, reporting automation and
                        dashboard development.

                    </p>

                </div>

                <div className="experience-card">

                    {/* ======================================================
                        LEFT
                    ====================================================== */}

                    <div className="experience-left">

                        <div className="experience-top">

                            <h3>

                                Data Analyst Intern

                            </h3>

                            <span className="experience-duration">

                                Feb 2026 – Jun 2026

                            </span>

                        </div>

                        <h4>

                            KaroStartup Technology India Pvt Ltd

                        </h4>

                        <ul className="experience-list">

                            <li>

                                Analysed business datasets using SQL,
                                Python, Advanced Excel and Power BI.

                            </li>

                            <li>

                                Designed interactive dashboards for
                                executive reporting and KPI monitoring.

                            </li>

                            <li>

                                Automated reporting workflows to improve
                                operational efficiency.

                            </li>

                            <li>

                                Performed data cleaning, transformation
                                and exploratory data analysis.

                            </li>

                            <li>

                                Generated actionable business insights
                                supporting data-driven decision making.

                            </li>

                        </ul>

                        <div className="experience-tech">

                            <span>Power BI</span>

                            <span>SQL</span>

                            <span>Python</span>

                            <span>Excel</span>

                            <span>Pandas</span>

                        </div>

                    </div>

                    {/* ======================================================
                        RIGHT
                    ====================================================== */}

                    <div className="experience-right">

                        <img

                            src="/images/internship/internship.jpg"

                            alt="Internship Certificate"

                            className="certificate-image"

                        />

                    </div>

                </div>

            </div>

        </section>

    );

};

export default Experience;