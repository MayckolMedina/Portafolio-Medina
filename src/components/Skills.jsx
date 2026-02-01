import './Skills.css';

const Skills = () => {
    const skills = [
        "HTML5", "CSS3", "JavaScript", "React", "Node.js", "Git", "Figma", "UI/UX"
    ];

    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Mis <span className="highlight">Habilidades</span></h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
