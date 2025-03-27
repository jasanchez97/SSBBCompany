import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import personajes from '../../data/characters.json'
import { useState, useEffect } from 'react';
import './Gallery.css';
import BackgroundVideo3 from "../../components/BackgroundVideo3/BackgroundVideo3";
import escenarios from '../../data/scenarios.json'

function Gallery() {
  const [personajesList, setPersonajesList] = useState([]);

  useEffect(() => {
    setPersonajesList(personajes);
  }, [personajes]);

  const personajesNormales = personajesList.filter(personaje => personaje.categoria === 'Iniciales');
  const personajesDesbloqueables = personajesList.filter(personaje => personaje.categoria === 'Desbloqueables');
  const jefes = personajesList.filter(personaje => personaje.categoria === 'Jefes');

  const [categoria, setCategoria] = useState('');
  const [escenariosFiltrados, setEscenariosFiltrados] = useState(escenarios);

  useEffect(() => {
    const filteredEscenarios = escenarios.filter((escenario) => {
      return escenario.categoria === categoria;
    });
    setEscenariosFiltrados(filteredEscenarios);
  }, [categoria]);

  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
  };

  return (
    <>
      <Header />
      <BackgroundVideo3 />
      <h1 id="gallery-title">Personajes</h1>
      <div className="gallery-grid-container" id="characters">
        {personajesNormales.map((personaje) => (
          <div className="gallery-card" key={personaje.nombre}>
            <h2>{personaje.nombre}</h2>
            <img src={`images/characters/${personaje.nombre}.png`} />
          </div>
        ))}
      </div>
      <h1 className="gallery-grid-container-title">Personajes Desbloqueables</h1>
      <div className="gallery-grid-container" id="unlocked-characters">
        {personajesDesbloqueables.map((personaje) => (
          <div className="gallery-card" key={personaje.nombre}>
            <h2>{personaje.nombre}</h2>
            <img src={`images/characters/${personaje.nombre}.png`} />
          </div>
        ))}
      </div>
      <h1 className="gallery-grid-container-title">Jefes</h1>
      <div className="gallery-grid-container" id="bosses">
        {jefes.map((personaje) => (
          <div className="gallery-card" key={personaje.nombre}>
            <h2>{personaje.nombre}</h2>
            <img src={`images/characters/${personaje.nombre}.png`} />
          </div>
        ))}
      </div>
      <h1 className="gallery-grid-container-title">Escenarios</h1>
      <div className="gallery-grid-container">
        {escenarios.map((escenario) => (
          <div className="gallery-card" id="scenarios" key={escenario.nombre}>
            <h2>{escenario.nombre}</h2>
            <img src={`images/scenarios/${escenario.nombre}.png`} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Gallery