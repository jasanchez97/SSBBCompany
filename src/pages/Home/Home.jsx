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
        Super Smash Bros. Brawl is a fighting game developed by Nintendo for the Wii console, released in 2008. It is the third installment in the iconic Super Smash Bros. series, and marked a milestone by incorporating characters from franchises outside of Nintendo, such as Solid Snake from Metal Gear and Sonic from Sonic the Hedgehog, bringing the series to an even wider audience.
        </p>
        <p className="home-paragraph">
        The game maintains the central premise of the series: instead of reducing your opponents' health bars, the goal is to knock them off the screen. This is achieved through dynamic and fast-paced gameplay that combines platforming elements with traditional fighting. Players control a variety of characters, each with unique abilities, and fight in interactive stages that range from simple areas to complex scenarios with multiple platforms and obstacles.
        </p>
        <p className="home-paragraph">
        Characters and Content: Brawl greatly expanded the list of playable characters, with a total of 39 characters, many of which were requested by fans. Notable additions include Solid Snake, the spy and protagonist of Metal Gear, Sonic, the hedgehog from Sega, and Wario, the anti-hero of Mario. The character selection also includes classics like Mario, Link, Samus, Pikachu, and many others, as well as a series of hidden characters that can be unlocked by completing certain requirements.
        </p>
        <p className="home-paragraph">
        Game Modes: In addition to the classic multiplayer mode, Brawl introduced a story mode called The Subspace Emissary, which combined fighting action with cinematic sequences. This mode follows a plot where the characters must join forces to save the universe from an evil villain known as Tabuu. The mode is characterized by its side-scrolling beat 'em up gameplay, where players must advance through different levels fighting against hordes of enemies.
        </p>
        <p className="home-paragraph">
        As for multiplayer, the game supports matches of up to four players simultaneously on the same console, and for the first time in the series, Super Smash Bros. Brawl included an online mode, allowing players to compete against each other through Nintendo's Wi-Fi connection. Although the online mode was not perfect due to some limitations of the Wii's infrastructure, it was a revolutionary feature for its time.
        </p>
        <p className="home-paragraph">
        Graphics and Soundtrack: Brawl used 3D graphics to represent characters and stages, giving it a more modern and vibrant feel compared to its predecessors.
        </p>
        <p className='home-paragraph'>
        Additionally, the game features one of the most celebrated soundtracks in the series, with over 200 tracks that include themes from a wide range of Nintendo franchises, as well as original music created for the game. The soundtrack was composed by 38 renowned musicians, and many of the themes are designed to evoke nostalgia in fans of the different sagas represented.
        </p>
        <p className="home-paragraph">
        Legacy: Super Smash Bros. Brawl received very positive reviews for its accessible yet deep gameplay, its characters, and its innovative multiplayer approach. Although some aspects, such as loading times and character controls, were criticized, the game is still considered one of the best in its genre and a reference for fighting games.
        </p>
        <p className="home-paragraph">
        The game was a commercial success, with over 13 million copies sold worldwide, and remains a cult classic among players. It was included in numerous lists of the greatest video games of all time, and in 2010 was included in the book 1001 Video Games You Must Play Before You Die.
        </p>
        <p className="home-paragraph">
        Super Smash Bros. Brawl is not only one of the most notable fighting games in history, but it also marked an important evolution in the way fighting games are conceived for home consoles. With its extensive cast of characters, interactive stages, and a unique story mode, the game remains a unique experience for video game fans.
        </p >
      </div>
      <Footer />
    </>
  );
}

export default Home;
