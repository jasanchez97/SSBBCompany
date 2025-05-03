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
        <p className="information-paragraph">Super Smash Bros. Brawl is a fighting video game distributed by Nintendo for the Wii console. As the third installment in the Super Smash Bros. series, Brawl's character list expands on that of its predecessor, Super Smash Bros. Melee.</p>

        <p className="information-paragraph">It is the first game in the series to feature characters from franchises outside of Nintendo, with the inclusion of Solid Snake from the Metal Gear series by Konami, and Sonic from the Sonic the Hedgehog series by Sega.</p>

        <p className="information-paragraph">Brawl was announced personally by Nintendo's president Satoru Iwata in a pre-E3 2004 press conference. Later that night, Masahiro Sakurai, the director of the previous two Super Smash Bros. games, was proposed to direct the third title.</p>

        <p className="information-paragraph">He accepted the position. In October 2005, when development of the game began, Nintendo had already enlisted the help of several external developers to work on a Tokyo office dedicated to the development of Brawl.</p>

        <p className="information-paragraph">Development of the game began in October 2005 with a team that included members from Nintendo and several third-party developers. After several delays due to technical issues, the game was finally released in Japan on January 31, 2008.</p>

        <p className="information-paragraph">It was later released in North America on March 9, 2008, in Australia on June 26, 2008, and in Europe on June 27, 2008. Twenty-seven months after its Japanese release, the game was released in South Korea on April 29, 2010.</p>

        <p className="information-paragraph">Like its predecessors, the objective of Brawl is to knock the opponent off the screen. It is a departure from traditional fighting games, particularly in its simplified controls for moving the player.</p>

        <p className="information-paragraph">And the emphasis on having to knock the opponent off the stage, rather than the traditional format of having to empty the opponent's energy bar.</p>

        <p className="information-paragraph">It includes a more extensive single-player mode than its predecessors, known as The Subspace Emissary. This mode is a side-scrolling beat 'em up.</p>

        <p className="information-paragraph">That includes computer-generated cinematic scenes featuring the game's characters. Brawl also includes multiplayer battles for up to four players.</p>

        <p className="information-paragraph">And is the first game in the franchise to make use of Nintendo's Wi-Fi Connection. The game supports up to four different controllers.</p>

        <p className="information-paragraph">Which are the Wii Remote with Nunchuk, the Wii Remote alone, the Classic Controller, and the GameCube controller. Super Smash Bros. Brawl received generally positive reviews.</p>

        <p className="information-paragraph">Receiving praise for its ability to entertain, despite criticism of its loading times. The game's music, which was composed by 38 video game composers.</p>

        <p className="information-paragraph">Was praised for its representation of different generations in the history of video games. It received a score of 93% on Metacritic and 92.75% on Game Rankings.</p>

        <p className="information-paragraph">Brawl was awarded "Best Fighting Game of the Year" in 2008 by the Academy of Interactive Arts & Sciences. In 2010, the game was included as one of the titles in the book 1001 Video Games You Must Play Before You Die..</p>

        <p className="information-paragraph">And is also considered one of the best video games ever created. As of 2023, it is the eighth best-selling Wii game of all time.</p>

        <p className="information-paragraph">With over 13 million copies sold worldwide. It was followed by Super Smash Bros. for Nintendo 3DS and Wii U in 2014.</p>

        <a onClick={() => handleButtonClick("/registerproducts")} className="information-button">Sales Records</a>
      </div>
      <Footer />
    </>
  )
}

export default Information

