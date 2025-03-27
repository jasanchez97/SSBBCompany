import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import useSound from "use-sound";
import ButtonSound from "/sounds/MainMenuSound.mp3";
import "./Information.css"

function Information() {

  const handleButtonClick = (url) => {
    playButtonSound();
    setTimeout(() => {
      window.location.href = url;
    }, 800);
  };

  const [playButtonSound] = useSound(ButtonSound, { volume: 0.3 });

  return (
    <>
      <img className="information-background" src="./images/misc/FinalDestinationBackground.jpg" />
      <img className="information-background-mobile" src="./images/misc/BackgroundInformationMobile.png" />
      <Header />
      <div>
        <h1 className="information-title">Desarrollo a lo largo de la historia</h1>
        <p className="information-paragraph">Super Smash Bros Brawl es un videojuego de lucha distribuido por Nintendo para la videoconsola Wii. Como la tercera entrega de la serie Super Smash Bros, la lista de personajes de Brawl se expande con respecto a la de su predecesor Super Smash Bros Melee.</p>

        <p className="information-paragraph">Es el primer juego dentro de la serie en presentar personajes de franquicias externas a Nintendo, con la inclusión de Solid Snake de la serie Metal Gear de Konami, y Sonic de la serie Sonic the Hedgehog de Sega.</p>

        <p className="information-paragraph">Brawl fue anunciado personalmente en una conferencia de prensa anterior al E3 respectivo de 2004 por el director ejecutivo en jefe Satoru Iwata. Posteriormente en esa misma noche, se le propuso al director de los dos juegos de la serie Super Smash Bros. previamente lanzados, Masahiro Sakurai, que fuera el director del tercer título.</p>

        <p className="information-paragraph">Este último aceptó el cargo. En octubre de 2005, cuando comenzó el desarrollo del juego, Nintendo ya había pedido la ayuda de varios desarrolladores externos para que trabajaran en una oficina en Tokio exclusiva para el desarrollo de Brawl.</p>

        <p className="information-paragraph">El desarrollo del juego comenzó en octubre de 2005 con un equipo que incluyó a miembros de Nintendo y de algunas third party. Después de varios retrasos por problemas técnicos, el juego fue finalmente lanzado en Japón el 31 de enero de 2008.</p>

        <p className="information-paragraph">El 9 de marzo de 2008 en Norteamérica, el 26 de junio de 2008 en Australia y el 27 de junio de 2008 en Europa. Veintisiete meses después del lanzamiento japonés, el juego fue lanzado en Corea del Sur, el 29 de abril de 2010.</p>

        <p className="information-paragraph">Como sus predecesores, el objetivo de Brawl es expulsar al oponente fuera de la pantalla. Es un punto de partida de los tradicionales juegos de lucha, en particular en sus simplificados comandos para mover al jugador.</p>

        <p className="information-paragraph">Y el énfasis en tener que expulsar al contrincante del escenario en contra del formato clásico en este tipo de juegos: tener que vaciar la barra de energía del enemigo.</p>

        <p className="information-paragraph">Incluye un modo de un jugador más extenso que sus predecesores, conocido como El emisario subespacial. Este modo es un beat 'em up de scroll horizontal.</p>

        <p className="information-paragraph">Que incluye escenas cinematográficas hechas por ordenador que protagonizan los personajes del juego. Brawl también incluye batallas multijugador de hasta cuatro jugadores.</p>

        <p className="information-paragraph">Y es el primer juego de la franquicia en hacer uso de la Conexión Wi-Fi de Nintendo. El juego admite hasta cuatro mandos distintos.</p>

        <p className="information-paragraph">Que son el mando de Wii con el Nunchuk, el mando de Wii individual, el mando clásico y el mando de GameCube. Super Smash Bros. Brawl recibió de forma general críticas positivas.</p>

        <p className="information-paragraph">Recibiendo elogios respecto a su capacidad para entretener, a pesar de las críticas relativas a sus tiempos de carga. Las melodías del juego, que fueron compuestas gracias a 38 compositores especializados en videojuegos.</p>

        <p className="information-paragraph">Fueron elogiadas por su representación de distintas generaciones en la historia de los videojuegos. Recibió una calificación de un 93% en Metacritic y de un 92.75% en Game Rankings.</p>

        <p className="information-paragraph">Brawl fue calificado como el «Mejor videojuego de lucha del año» en 2008 por la Academy of Interactive Arts & Sciences. En 2010, el juego fue incluido como uno de los títulos del libro 1001 videojuegos a los que hay que jugar antes de morir.</p>

        <p className="information-paragraph">Y también se considera uno de los mejores videojuegos jamás creados. A partir de 2023, es el octavo juego de Wii más vendido de todos los tiempos.</p>

        <p className="information-paragraph">Con más de 13 millones de copias vendidas en todo el mundo. Le siguió Super Smash Bros. para Nintendo 3DS y Wii U en 2014.</p>

        <a onClick={() => handleButtonClick("/registerproducts")} className="information-button">Registros de copias vendidas</a>
      </div>
      <Footer />
    </>
  )
}

export default Information

