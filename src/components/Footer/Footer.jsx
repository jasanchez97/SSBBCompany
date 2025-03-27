import "./Footer.css"

function Footer() {
  return (
    <>
      <div className="footer-container">
        <img src="/images/misc/Tabuu.png" id="tabuu" />
        <img className="footer-background" src="/videos/SmashUltimateLogo.gif" />
        <div className="footer-main">
          <p className="footer-css">© 2023 SSBB Corporation Todos los derechos reservados.</p>
          <p>
            <a className="footer-css" id="footer-css1" href="/policyconditions">Política de Privacidad, Cookies y Condiciones de Venta</a>
          </p>
          <p className="footer-css">Desarrollado por:
            <a className="footer-css" id="footer-css2" href="https://github.com/jasanchez97" target="_blank">jasanchez97</a>
          </p>
          <img className="footer-img" src="./images/misc/GithubLogo.png" />
        </div>
      </div>
    </>
  )
}

export default Footer