import "./education.css";

const Education = () => {
    return (

        <section id="education" className="experience">

            {/* ===================== EDUCATION ===================== */}

            <div className="experience-header">

                <h2>
                    Academic <span>Journey</span>
                </h2>

                <p>
                    My educational journey reflects consistent academic
                    growth, strong analytical foundations and a continuous
                    passion for technology, data analytics and business
                    intelligence.
                </p>

            </div>

            {/* ===================== TIMELINE ===================== */}

            <div className="education-timeline">

                {/* SSLC */}
                <div className="education-card">
                    <div className="education-year">2019</div>

                    <h3>SSLC (CBSE)</h3>

                    <h4>Sri Chaitanya Techno School</h4>

                    <div className="education-score">
                        <span>Percentage</span>
                        <strong>77.8%</strong>
                    </div>
                </div>

                <div className="timeline-line"></div>

                {/* PUC */}
                <div className="education-card">
                    <div className="education-year">2021</div>

                    <h3>Higher Secondary (PUC)</h3>

                    <h4>Swamy Vivekananda PU College</h4>

                    <div className="education-score">
                        <span>Percentage</span>
                        <strong>82%</strong>
                    </div>
                </div>

                <div className="timeline-line"></div>

                {/* BCA */}
                <div className="education-card">
                    <div className="education-year">2021 – 2024</div>

                    <h3>Bachelor of Computer Applications</h3>

                    <h4>Christ College of Science & Management</h4>

                    <div className="education-score">
                        <span>CGPA</span>
                        <strong>9.03</strong>
                    </div>
                </div>

                <div className="timeline-line"></div>

                {/* MCA */}
                <div className="education-card">
                    <div className="education-year">2024 – 2026</div>

                    <h3>Master of Computer Applications</h3>

                    <h4>Dayananda Sagar College of Engineering</h4>

                    <div className="education-score">
                        <span>CGPA</span>
                        <strong>9.14</strong>
                    </div>
                </div>

            </div>

{/* ===================== ACHIEVEMENTS ===================== */}

<div className="achievement-wrapper">

    <div className="experience-header">

        <h2>
            Leadership & <span>Recognition</span>
        </h2>

        <p>
            Academic excellence, leadership experience and recognition
            for impactful contributions in student leadership and event
            management beyond the classroom.
        </p>

    </div>

    <div className="achievement-grid">

        {/* BCA Rank */}

        <div className="achievement-card">

            <div className="achievement-icon">🥉</div>

            <h3>
                Overall BCA 3rd Rank
            </h3>

            <h4>
                Christ College of Science & Management
            </h4>

        </div>

        {/* President - Women Empowerment Cell */}

        <div className="achievement-card">

            <div className="achievement-icon">👑</div>

            <h3>
                President
            </h3>

            <h4>
                Women Empowerment Cell 
            </h4>

        </div>

        {/* Event Architect Award */}

        <div className="achievement-card">

            <div className="achievement-icon">🏗️</div>

            <h3>
                Event Architect Award
            </h3>

            <h4>
                Recognized for Leadership & Event Management Excellence
            </h4>

        </div>

    </div>

</div>

        </section>
    );
};

export default Education;