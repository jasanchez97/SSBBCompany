import "./Footer.css"

function Footer() {
  return (
    <>
      <div className="footer-container">
        <img src="/images/misc/Tabuu.png" id="tabuu" />
        <img className="footer-background" src="/videos/SmashUltimateLogo.gif" />
        <div className="footer-main">
          <p className="footer-css">© 2023 SSBB Corporation S.A.</p>
          <p>
            <a className="footer-css" id="footer-css1" href="/policyconditions">Policy Conditions and Terms of Use</a>
          </p>
          <p className="footer-css">Developed by:
            <a className="footer-css" id="footer-css2" href="https://github.com/jasanchez97" target="_blank">jasanchez97</a><br></br>
            <a className="footer-css" id="footer-css2" href="https://github.com/xiomi94" target="_blank">xiomi94</a>
          </p>
          <img className="footer-img" src="./images/misc/GithubLogo.png" />
        </div>
      </div>
    </>
  )
}

export default Footer