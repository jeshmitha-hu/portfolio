type Skill = {
  name: string;
  level: number;
};

type Props = {
  title: string;
  skills: Skill[];
};

const SkillCategory = ({ title, skills }: Props) => {
  return (

    <div className="skill-category">

      {/* ================= CATEGORY TITLE ================= */}

      <div className="skill-category-header">

        <h3>{title}</h3>

      </div>

      {/* ================= SKILLS ================= */}

      <div className="skill-list">

        {skills.map((skill) => (

          <div
            key={skill.name}
            className="skill-item"
          >

            <div className="skill-top">

              <span className="skill-name">

                {skill.name}

              </span>

              <span className="skill-percent">

                {skill.level}%

              </span>

            </div>

            <div className="skill-bar">

              <div
                className="skill-progress"
                style={{
                  width: `${skill.level}%`
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  );
};

export default SkillCategory;