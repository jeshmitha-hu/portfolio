import { useState } from "react";

import { techStack } from "../../data/skillsData";

import OrbitLines from "./OrbitLines";

import "./techorbit.css";

const TechOrbit = () =>
{
    const [selected, setSelected] = useState(techStack[0]);

    /* ==========================================================
       ORBIT SIZE
    ========================================================== */

    const radius = 205;

    return (

        <div className="tech-orbit-wrapper">

            {/* ==========================================================
                LEFT : ORBIT
            ========================================================== */}

            <div className="orbit-container">

                <div className="orbit-circle">

                    <OrbitLines />

                    <div className="orbit-center">

                        <span>

                            Tech Stack

                        </span>

                    </div>

                    {techStack.map((tech, index) =>
                    {
                        const angle =
                            (
                                (360 / techStack.length) * index
                                - 90
                            ) * (Math.PI / 180);

                        const x = Math.cos(angle) * radius;

                        const y = Math.sin(angle) * radius;

                        return (

                            <button

                                key={tech.id}

                                type="button"

                                className={
                                    `orbit-node ${
                                        selected.id === tech.id
                                            ? "orbit-node-active"
                                            : ""
                                    }`
                                }

                                style={{
                                    left: `calc(50% + ${x}px)`,
                                    top: `calc(50% + ${y}px)`
                                }}

                                onMouseEnter={() => setSelected(tech)}

                            >

                                {tech.name}

                            </button>

                        );

                    })}

                </div>

            </div>

            {/* ==========================================================
                RIGHT : INFORMATION PANEL
            ========================================================== */}

            <div className="tech-info">

                <span className="tech-category">

                    {selected.category}

                </span>

                <h3>

                    {selected.name}

                </h3>

                <p>

                    {selected.description}

                </p>

                <div className="tech-block">

                    <h4>

                        Core Capabilities

                    </h4>

                    <ul>

                        {selected.capabilities.map((capability) => (

                            <li key={capability}>

                                {capability}

                            </li>

                        ))}

                    </ul>

                </div>

            </div>

        </div>

    );

};

export default TechOrbit;