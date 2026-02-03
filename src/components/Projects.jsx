import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "web-cosmeticos",
            description: "Una tienda online de constemricos con catalogo incluido.",
            tech: ["figma", "Node.js", "CSS"],
            image: 'url("https://api.microlink.io/?url=https://cosmeticos-mu.vercel.app&screenshot=true&embed=screenshot.url', // Placeholder
            link: "https://cosmeticos-mu.vercel.app/"
        },
        {
            id: 2,
            title: "Web-Review",
            description: "Pagina webo demostratica con registro y login .",
            tech: ["React Native", "MongoDB", "Node.js", "tailwind"],
            image: 'url("https://api.microlink.io/?url=https://king-review.vercel.app&screenshot=true&embed=screenshot.url")'// Placeholder
        },
        {
            id: 3,
            title: "Web-Matizados",
            description: "Una tienda online.",
            tech: ["React", "Stripe", "MongoDB"],
            image: `url('https://api.microlink.io/?url=https://matizados-saturno-ten.vercel.app&screenshot=true&embed=screenshot.url')`, // Placeholder
            link: "https://matizados-saturno-ten.vercel.app/"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Mis <span className="highlight">Proyectos</span></h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="card-image" style={{ backgroundImage: project.image }}></div>
                        <div className="card-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-tags">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                        <div className="card-overlay">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">
                                Ver Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
