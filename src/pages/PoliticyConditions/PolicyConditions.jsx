import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BackgroundVideo2 from '../../components/BackgroundVideo2/BackgroundVideo2';
import "./PolicyConditions.css"


function PolicyConditions() {
  return (
    <>
      <Header />
      <BackgroundVideo2 />
      <div className="policyconditions-container">
        <h1 className="policyconditions-title">Política de Privacidad</h1>
        <p className="policyconditions-p">
          Última actualización: 01-01-2025
          <br />
          <br />
          En Super Smash Bros Brawl Company, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos tu información cuando usas nuestro videojuego.
        </p>

        <h1 className="policyconditions-title">1. Información que recopilamos</h1>
        <p className="policyconditions-p">Cuando juegas a Super Smash Bros Brawl, podemos recopilar la siguiente información:
          <br />
          <br />
          Información personal: Nombre, dirección de correo electrónico, edad, etc.
          <br />
          <br />
          Información de uso: Datos sobre tu interacción con el videojuego, como estadísticas de juego, progreso, logros y preferencias.
          <br />
          <br />
          Información técnica: Datos como la dirección IP, tipo de dispositivo, sistema operativo, navegador y detalles de conexión.</p>

        <h1 className="policyconditions-title">2. Cómo utilizamos tu información</h1>
        <p className="policyconditions-p">Utilizamos la información recopilada para:
          <br />
          <br />
          Mejorar y personalizar tu experiencia de juego.
          <br />
          <br />
          Enviar actualizaciones, noticias y promociones relacionadas con el videojuego.
          <br />
          <br />
          Cumplir con nuestras obligaciones legales y de servicio.</p>

        <h1 className="policyconditions-title">3. Compartir tu información</h1>
        <p className="policyconditions-p">No vendemos, alquilamos ni compartimos tu información personal con terceros sin tu consentimiento, salvo cuando sea necesario para cumplir con la ley o en situaciones excepcionales, como con proveedores de servicios de pago o servidores en la nube.</p>

        <h1 className="policyconditions-title">4. Seguridad</h1>
        <p className="policyconditions-p">Tomamos medidas razonables para proteger tus datos personales contra accesos no autorizados, pérdida o alteración. Sin embargo, ten en cuenta que ningún sistema es completamente seguro.</p>

        <h1 className="policyconditions-title">5. Tus derechos</h1>
        <p className="policyconditions-p">Tienes derecho a acceder, corregir o eliminar tus datos personales. Para hacer esto, por favor contacta con nosotros a través de:
        <br />
        <br />
        subspaceemissary@SSBBcorporation.com.</p>

        <h1 className="policyconditions-title">6. Cambios en esta política</h1>
        <p className="policyconditions-p">Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio importante a través de los medios disponibles en el videojuego.</p>
      </div>

      <div className="policyconditions-container" id="conditions">
        <h1 className="policyconditions-title">Condiciones de Venta</h1>
        <p className="policyconditions-p">Última actualización: 01-01-2025
        <br />
        <br />
        Estas Condiciones de Venta regulan la compra de productos, servicios o contenidos dentro del videojuego Super Smash Bros Brawl. Al realizar una compra, aceptas los términos y condiciones establecidos a continuación.</p>

        <h1 className="policyconditions-title">1. Productos y precios</h1>
        <p className="policyconditions-p">Los productos y contenidos del videojuego están sujetos a disponibilidad. Los precios pueden variar y están sujetos a cambios sin previo aviso. El precio final será el que se muestre en el momento de la compra.</p>

        <h1 className="policyconditions-title">2. Métodos de pago</h1>
        <p className="policyconditions-p">Aceptamos una variedad de métodos de pago, que incluyen tarjetas de crédito/débito, PayPal y otros sistemas de pago electrónicos. Todos los pagos se procesan a través de plataformas seguras.</p>

        <h1 className="policyconditions-title">3. Entrega de productos digitales</h1>
        <p className="policyconditions-p">Una vez realizada la compra, los productos digitales, como contenido descargable (DLC), skins, monedas virtuales o suscripciones, estarán disponibles para su descarga o uso inmediato dentro del videojuego.</p>

        <h1 className="policyconditions-title">4. Política de reembolsos</h1>
        <p className="policyconditions-p">No se aceptan reembolsos una vez que se haya entregado el producto digital, salvo en casos donde el producto esté defectuoso o no se haya podido entregar por problemas técnicos.</p>

        <h1 className="policyconditions-title">5. Propiedad intelectual</h1>
        <p className="policyconditions-p">Todos los derechos de propiedad intelectual relacionados con Super Smash Bros Brawl y su contenido (incluidos pero no limitados a gráficos, música, códigos y personajes) son propiedad de Super Smash Bros Brawl Company. Está prohibido el uso no autorizado de cualquier contenido del videojuego.</p>

        <h1 className="policyconditions-title">6. Modificaciones</h1>
        <p className="policyconditions-p">Nos reservamos el derecho de modificar, suspender o eliminar cualquier parte de los productos o servicios ofrecidos sin previo aviso. Esto incluye cambios en las características, precios o disponibilidad de los contenidos.</p>

        <h1 className="policyconditions-title">7. Responsabilidad</h1>
        <p className="policyconditions-p">Super Smash Bros Brawl Company no será responsable por daños directos, indirectos o incidentales derivados del uso del videojuego, incluyendo pero no limitado a pérdidas de datos, acceso no autorizado o errores en el juego.</p>

        <h1 className="policyconditions-title">8. Ley aplicable</h1>
        <p className="policyconditions-p">Estas Condiciones de Venta se regirán por las leyes del país en el que se encuentra la sede de Super Smash Bros Brawl Company, y cualquier disputa relacionada con las compras en el videojuego estará sujeta a la jurisdicción de los tribunales de dicha localidad.</p>
      </div>
      <Footer />
    </>
  );
};

export default PolicyConditions;
