import React from "react"
import Layout from '../components/layout'
import Accordion from '../components/accordion'
import '../components/css/layout.css'

const AvisoLegal = () => {
  const accordionItems = [
    {
      title: 'Titularidad del Dominio',
      content: (
        <p>El dominio www.patrimonionacional.es es de titularidad del organismo público Consejo de Administración del Patrimonio Nacional.</p>
      ),
    },
    {
      title: 'Condiciones de Uso',
      content: (
        <>
          <p>La página web y todos los dominios y directorios incluidos bajo la misma (en adelante conjuntamente denominados como Portal), así como los servicios o contenidos que a través de él se puedan obtener, están sujetos a los términos que se detallan en este Aviso Legal, sin perjuicio de que el acceso a alguno de dichos servicios o contenidos pudieran precisar de la aceptación de una Condiciones Generales adicionales.</p>
          <p>Por ello, si las consideraciones detalladas en este Aviso Legal no son de su conformidad, rogamos no haga uso del Portal, ya que cualquier uso que haga del mismo o de los servicios y contenidos en él incluidos implicará la aceptación de los términos legales recogidos en este texto.</p>
        </>
      ),
    },
    {
      title: 'Función del Portal',
      content: (
        <p>El Portal cumple la función de información general y atención al ciudadano en los términos de lo establecido en el artículo 4 del Real Decreto 208/1996, de 9 de febrero, por el que se regulan los servicios de información administrativa y de atención al ciudadano, teniendo carácter meramente informativo y sin que en ningún caso pueda derivarse de ellos efecto jurídico vinculante alguno.</p>
      ),
    },
    {
      title: 'Actualización de Contenidos',
      content: (
        <p>Con objeto de mantener actualizada la información publicada en el Portal, los contenidos del mismo podrán ser modificados, corregidos, eliminados o añadidos en cualquier momento, por lo que será conveniente comprobar la vigencia o exactitud de los mismos acudiendo a las fuentes oficiales.</p>
      ),
    },
    {
      title: 'Propiedad Intelectual',
      content: (
        <p>El diseño del Portal y su código fuente, logos, marcas y demás signos distintivos que aparecen en el mismo pertenecen al organismo público Consejo de Administración del Patrimonio Nacional, y están protegidos por los correspondientes derechos de propiedad intelectual e industrial.</p>
      ),
    },
    {
      title: 'Enlaces a Otros Sitios Web',
      content: (
        <p>El organismo público Consejo de Administración del Patrimonio Nacional facilita el acceso a otras páginas web que consideramos pueden ser de su interés. El objetivo de dichos enlaces es únicamente facilitarle la búsqueda de los recursos que le puedan interesar a través de Internet. No obstante, dichas páginas no le pertenecen, ni hace una revisión de sus contenidos y, por ello, no puede hacerse responsable de los mismos, del funcionamiento de la página enlazada o de los posibles daños que puedan derivarse del acceso o uso de la misma.</p>
      ),
    },
    {
      title: 'Prohibiciones',
      content: (
        <p>El organismo público Consejo de Administración del Patrimonio Nacional prohíbe expresamente la realización de “framings” o la utilización por parte de terceros de cualesquiera otros mecanismos que alteren el diseño, configuración original o contenidos de su Portal.</p>
      ),
    },
    {
      title: 'Uso de Cookies',
      content: (
        <>
          <p>El organismo público Consejo de Administración del Patrimonio Nacional utiliza un servicio de analítica web que instala cookies temporalmente con la única y exclusiva finalidad de elaborar informes de carácter estadístico. Las cookies son ficheros creados en el navegador del usuario para registrar su actividad en el sitio web. Una cookie no identifica a una persona, sino a una combinación de computador-navegador-usuario, tienen una vigencia temporal limitada y en ningún caso, se utilizan para recoger información de carácter personal.</p>
          <p>Para navegar por el portal no es necesario que usted permita la instalación de estas cookies: usted puede deshabilitarlas directamente en su navegador. En cada navegador la operativa diferente, consulte en la política de cookies como hacerlo.</p>
        </>
      ),
    },
    {
      title: 'Reproducción de Contenidos',
      content: (
        <p>Se prohíbe la reproducción total o parcial de los contenidos del Portal sin citar su origen o solicitar autorización.</p>
      ),
    },
  ]

  return (
    <Layout>
      <div className="avisolegal">
        <h1>Aviso Legal</h1>
        <Accordion items={accordionItems} />
      </div>
    </Layout>
  )
}

export default AvisoLegal
