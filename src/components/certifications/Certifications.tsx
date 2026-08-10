import { useState } from "react";
import "./certifications.css";

const certifications = [
    {
        title: "Data Analyst Certification",
        issuer: "TechTip24",
        image: "/images/certificate/data_analyst.jpg",
        description: "SQL • Python • Power BI • Excel"
    },
    {
        title: "Advanced Microsoft Excel",
        issuer: "Skill Course",
        image: "/images/certificate/excel.png",
        description: "Power Query • Pivot Tables • Dashboards"
    },
    {
        title: "Power BI",
        issuer: "TechTip24",
        image: "/images/certificate/power_bi.jpg",
        description: "DAX • Reports • KPI Dashboards"
    },
    {
        title: "Tata Data Visualisation",
        issuer: "Forage",
        image: "/images/certificate/tata.jpg",
        description: "Business Storytelling • Executive Reports"
    },
    {
        title: "Deloitte Data Analytics",
        issuer: "Forage",
        image: "/images/certificate/deloitte.jpg",
        description: "Analytics • Tableau • Excel"
    }
];

const Certifications = () => {

    const [activeIndex, setActiveIndex] = useState(3);

    return (

        <section id="certifications" className="certifications">

            {/* HEADER */}
            <div className="certifications-header">
                <h2>
                    Professional <span>Certifications</span>
                </h2>

                <p>
                    Industry-recognised certifications demonstrating strong skills
                    in Data Analytics, Business Intelligence and Visualization.
                </p>
            </div>

            {/* MAIN LAYOUT */}
            <div className="certifications-layout">

                {/* LEFT SIDE (BOXES) */}
                <div className="certificate-left">

         

                    <div className="certificate-tabs">

                        {certifications.map((cert, index) => (

                            <div
                                key={cert.title}
                                className={`certificate-tab ${
                                    activeIndex === index ? "active" : ""
                                }`}
                                onClick={() => setActiveIndex(index)}
                            >

                                <div className="tab-content">

                                    <h3 className="tab-title">
                                        {cert.title}
                                    </h3>

                                    <p className="tab-issuer">
                                        {cert.issuer}
                                    </p>

                                    <p className="tab-desc">
                                        {cert.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* RIGHT SIDE (IMAGE PREVIEW) */}
                <div className="certificate-right">

                    <div className="certificate-preview">
                        <img
                            src={certifications[activeIndex].image}
                            alt={certifications[activeIndex].title}
                        />
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Certifications;