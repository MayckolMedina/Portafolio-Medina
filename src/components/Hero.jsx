import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h2 className="greeting">Hola, soy</h2>
                <h1 className="name-title">
                    <span className="gradient-text">DESARROLLADOR</span> CREATIVO
                </h1>
                <p className="description">
                    Transformo ideas en experiencias digitales interactivas.
                    Especializado en crear interfaces modernas y funcionales que dejan huella.
                </p>
                <div className="cta-container">
                    <button className="btn btn-primary">Ver Proyectos</button>
                    <button className="btn btn-secondary">Contactar</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
