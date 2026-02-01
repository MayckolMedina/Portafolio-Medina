import Background from './components/Background';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Background />

      <div className="content-wrapper">
        <header className="main-header">
          <nav className="nav-bar">
            <div className="logo">PORTFOLIO</div>
            <ul className="nav-links">
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <footer className="footer">
          <p>&copy; 2024 Creado con React + Vite</p>
        </footer>
      </div>
    </div>
  )
}

export default App
