import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h2 className="greeting">Hola, soy <span className="nombre">Mayckol Medina Enriquez</span></h2>
                <h1 className="name-title">
                    <span className="gradient-text">DESARROLLADOR</span> FULL STACK
                </h1>
                <p className="description">
                    Actualmente resido en Perú, creo aplicaciones web, desde interfaces atractivas hasta sistemas eficientes en el backend, optimizando rendimiento y usabilidad.
                </p>
                <div className="cta-container">
                    {/* El href debe coincidir con el id que pusimos en el paso 1 */}
                    <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
                    <a href="#contact" className="btn btn-secondary">Contactar</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;