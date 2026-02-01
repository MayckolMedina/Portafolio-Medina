import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Futurista",
            description: "Una tienda online con diseño cyberpunk y carrito de compras en tiempo real.",
            tech: ["React", "Stripe", "Firebase"],
            image: "linear-gradient(45deg, #1a1a1a, #2a2a2a)" // Placeholder
        },
        {
            id: 2,
            title: "Dashboard de Finanzas",
            description: "Visualización de datos financieros con gráficos interactivos y modo oscuro.",
            tech: ["Vue", "D3.js", "Node.js"],
            image: "linear-gradient(45deg, #0f0f0f, #1f1f1f)" // Placeholder
        },
        {
            id: 3,
            title: "App de Gestión de Tareas",
            description: "Organizador de productividad con drag & drop y sincronización en la nube.",
            tech: ["React Native", "Redux", "AWS"],
            image: "linear-gradient(45deg, #222, #333)" // Placeholder
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Mis <span className="highlight">Proyectos</span></h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="card-image" style={{ background: project.image }}></div>
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
                            <button className="view-btn">Ver Demo</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
