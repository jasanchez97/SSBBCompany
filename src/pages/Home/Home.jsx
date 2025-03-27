import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Home.css';
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo';
import escenarios from '../../data/scenarios.json';

const SmashUltimateLogo = '/components/videos/SmashUltimateLogo.gif';

function Home() {
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

  <img src="/components/videos/SmashUltimateLogo.gif" />
  return (
    <>
      <Header />
      <BackgroundVideo />
      <img className="home-main-mobile-logo" src="/images/misc/BackgroundHomeMobile.png" />
      <img className="home-main-logo" src="/images/misc/SSBBGameLogo.png" />
      <div className="home-paragraph-main">
        <p className="home-paragraph" >
          Super Smash Bros. Brawl es un juego de lucha desarrollado por Nintendo para la consola Wii, lanzado en 2008. Es la tercera entrega de la icónica serie Super Smash Bros., y marcó un hito al incorporar personajes de franquicias ajenas a Nintendo, como Solid Snake de Metal Gear y Sonic de Sonic the Hedgehog, llevando la serie a un público aún más amplio.
        </p>
        <p className="home-paragraph">
          El juego mantiene la premisa central de la serie: en lugar de reducir la barra de vida de tus oponentes, el objetivo es expulsarlos fuera de la pantalla. Esto se logra a través de una jugabilidad dinámica y rápida, que combina elementos de plataformas con lucha tradicional. Los jugadores controlan una variedad de personajes, cada uno con habilidades únicas, y luchan en escenarios interactivos que varían desde áreas simples hasta complejos escenarios con múltiples plataformas y obstáculos.
        </p>
        <p className="home-paragraph">
          Personajes y Contenido: Brawl amplió enormemente la lista de personajes jugables, con un total de 39 personajes, muchos de los cuales fueron pedidos por los fanáticos. Entre las adiciones más notables están Solid Snake, el espía y protagonista de Metal Gear, Sonic, el erizo de Sega, y Wario, el anti-héroe de Mario. La selección de personajes también incluye a clásicos como Mario, Link, Samus, Pikachu y muchos otros, así como una serie de personajes ocultos que pueden ser desbloqueados al cumplir ciertos requisitos.
        </p>
        <p className="home-paragraph">
          Modos de Juego: Además del clásico modo multijugador, Brawl introdujo un modo de historia llamado El emisario subespacial, que combinaba la acción de lucha con secuencias cinemáticas. Este modo sigue una trama donde los personajes deben unirse para salvar el universo de un malvado villano conocido como Tabuu. El modo se caracteriza por su estilo de juego beat 'em up de desplazamiento lateral, en el que los jugadores deben avanzar a través de distintos niveles luchando contra hordas de enemigos.
        </p>
        <p className="home-paragraph">
          En cuanto al multijugador, el juego soporta partidas de hasta cuatro jugadores simultáneos en una misma consola, y por primera vez en la serie, Super Smash Bros. Brawl incluyó un modo online, permitiendo a los jugadores competir entre sí a través de la conexión Wi-Fi de Nintendo. A pesar de que el modo online no fue perfecto debido a algunas limitaciones de la infraestructura de la Wii, fue una característica revolucionaria para su tiempo.
        </p>
        <p className="home-paragraph">
          Gráficos y Banda Sonora: Brawl utilizó los gráficos en 3D para representar a los personajes y escenarios, lo que le dio una sensación más moderna y vibrante en comparación con sus predecesores.
        </p>
        <p className='home-paragraph'>
        Además, el juego cuenta con una de las bandas sonoras más celebradas de la serie, con más de 200 pistas que incluyen temas de una amplia gama de franquicias de Nintendo, así como música original creada para el juego. La banda sonora fue compuesta por 38 músicos de renombre, y muchos de los temas están diseñados para evocar nostalgia en los fanáticos de las distintas sagas representadas.
        </p>
        <p className="home-paragraph">
          Legado: Super Smash Bros. Brawl recibió críticas muy positivas por su jugabilidad accesible pero profunda, sus personajes y su innovador enfoque multijugador. Aunque algunos aspectos, como los tiempos de carga y los controles de los personajes, fueron objeto de críticas, el juego sigue siendo considerado uno de los mejores de su género y un referente para los juegos de lucha.
        </p>
        <p className="home-paragraph">
          El juego fue un éxito comercial, con más de 13 millones de copias vendidas en todo el mundo, y sigue siendo un título de culto entre los jugadores. Fue incluido en numerosas listas de los mejores videojuegos de todos los tiempos, y en 2010 fue incluido en el libro 1001 videojuegos a los que hay que jugar antes de morir.
        </p>
        <p className="home-paragraph">
          Super Smash Bros. Brawl no solo es uno de los juegos de lucha más destacados de la historia, sino que también marcó una evolución importante en la manera en que se conciben los videojuegos de lucha en consolas caseras. Con su extenso elenco de personajes, escenarios interactivos y un modo de historia único, el juego sigue siendo una experiencia única para los fanáticos de los videojuegos.
        </p >
      </div>
      <Footer />
    </>
  );
}

export default Home;
