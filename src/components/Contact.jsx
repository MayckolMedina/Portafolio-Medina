import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">¿Listo para <span className="highlight">crear algo increíble?</span></h2>
            <p className="contact-text">
                Estoy disponible para nuevos proyectos y colaboraciones.
                Si tienes una idea en mente, hablemos.
            </p>
            <a href="mailto:contacto@ejemplo.com" className="email-btn">
                Enviame un correo
            </a>
        </section>
    );
};

export default Contact;
