import { useState } from "react";
import "./Header.css";
import useSound from "use-sound";
import WiiMenuBanner from "/sounds/WiiMenuBanner.mp3";
import ButtonSound from "/sounds/MainMenuSound.mp3";

function Header() {
  const [smashLogo, setSmashLogo] = useState("/images/misc/SmashLogo.png");

  const handleMouseEnter = () => {
    setSmashLogo("/images/misc/SmashLogoMouseIn.png");
    playSound();
  };

  const handleMouseOut = () => {
    setSmashLogo("/images/misc/SmashLogo.png");
  };

  const [playSound] = useSound(WiiMenuBanner, { volume: 0.3 });
  const [playButtonSound] = useSound(ButtonSound, { volume: 0.3 });

  const handleButtonClick = (url) => {
    playButtonSound();
    setTimeout(() => {
      window.location.href = url;
    }, 800);
  };

  return (
    <div className="header-main">
      <img className="header-logo" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} src={smashLogo} id="header-logo" alt="Smash Logo" />
      <div className="header-buttons">
        <a onClick={() => handleButtonClick("/home")} className="header-button">Inicio</a>
        <a onClick={() => handleButtonClick("/information")} className="header-button">Información</a>
        <a onClick={() => handleButtonClick("/gallery")} className="header-button">Galería</a>
      </div>
    </div>
  );
}

export default Header;
