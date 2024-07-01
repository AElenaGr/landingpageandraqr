import React from "react"
import Layout from '../components/layout'
import Accordion from '../components/accordion'
import '../components/css/layout.css'

const Accesibilidad = () => {
  const accordionItems = [
    {
      title: 'Introducción',
      content: (
        <p>Uno de los objetivos de Patrimonio Nacional es tener un portal accesible para todos los ciudadanos.</p>
      ),
    },
    {
      title: 'Definición de Accesibilidad',
      content: (
        <p>La accesibilidad en un sitio web consiste en garantizar el acceso a la información y a los servicios de sus páginas sin limitación ni restricción alguna por razón de discapacidad de cualquier carácter o condicionantes técnicos, debiendo tener en cuenta que muchas personas que acceden a la información incluida en páginas Web lo hacen desde diferentes dispositivos y contextos.</p>
      ),
    },
    {
      title: 'Pautas y Recomendaciones',
      content: (
        <p>Con el fin de ayudar y facilitar el acceso a la información, las páginas web deben cumplir una serie de pautas y recomendaciones indicadas por el grupo de trabajo WAI (Web Accessibility Initiative), que forma parte del consorcio de W3C (World Wide Web Consortium). Tales pautas conforman un estándar de hecho en materia de accesibilidad a las páginas web.</p>
      ),
    },
    {
      title: 'Niveles de Verificación',
      content: (
        <p>WAI establece tres niveles de verificación o adecuación que son: nivel 1 (A), nivel 2 (AA) y el nivel 3 (AAA). Los sitios Web de los organismos pertenecientes a la Administración General del Estado deben cumplir con los dos primeros niveles de adecuación (AA), de esta forma, se puede asegurar que la mayor parte de los usuarios podrán acceder a la información publicada.</p>
      ),
    },
    {
      title: 'Cumplimiento de las Directrices',
      content: (
        <p>En el diseño de las plantillas de contenido utilizadas en la creación de las páginas del sitio Web del Portal de Patrimonio Nacional, se han respetado las Directrices de Accesibilidad WAI 1.0 en su nivel AA. Este sitio Web pretende ser accesible para todos en igualdad de condiciones, no obstante, si se encuentra con alguna dificultad o desea hacer algún comentario o sugerencia, no dude en contactar con nosotros a través de la sección de contacto.</p>
      ),
    },
    {
      title: 'Política de Accesibilidad',
      content: (
        <p>La política de accesibilidad aplicada está alineada con las exigencias del Real Decreto 1494/2007, de 12 de noviembre, por el que se aprueba el Reglamento sobre las condiciones básicas para el acceso de las personas con discapacidad a las tecnologías, productos y servicios relacionados con la sociedad de la información y medios de comunicación social.</p>
      ),
    },
    {
      title: 'Cumplimiento de los Estándares',
      content: (
        <p>Las páginas de este sitio Web cumplen la marca AA según la Norma UNE 139803:2004 y las Directrices de Accesibilidad para el Contenido Web 1.0 del W3C. Todos los requisitos de Prioridad 1 y Prioridad 2 han sido comprobados y corregidos mediante un análisis semi-automático de la accesibilidad a través de diferentes herramientas.</p>
      ),
    },
    {
      title: 'Estándares Web y Otros Formatos Utilizados',
      content: (
        <>
          <p>El portal www.patrimonionacional.es, ha sido realizado utilizando XHTML 1.0 para el marcaje de contenido y hojas de estilo CSS 2 para el diseño visual, evitándose en la medida de lo posible utilizar tecnologías propietarias que condicionen el uso de determinados aparatos o navegadores. Estos estándares garantizan el acceso a la información a través de cualquier dispositivo de navegación que soporte las recomendaciones del W3C.</p>
          <p>Este sitio web usa hojas de estilo en cascada para el formateo visual de la información (documentos originales que están construidos de manera estructurada usando XML).</p>
          <p>Los estilos utilizados se han construido siguiendo las recomendaciones del consorcio W3C, para la versión 2 de hojas de estilo en cascada y han sido validados mediante la herramienta de validación del código CSS que proporciona el consorcio, no dando como resultado del análisis ningún error.</p>
          <p>En caso de que el usuario acceda al portal a través de un navegador que no soporte hojas de estilo, el marcado estructural permite la correcta visualización de todos los contenidos. Si se selecciona la opción sin estilo, se visualizarán las páginas sin ningún tipo de formato visual.</p>
        </>
      ),
    },
  ]

  return (
    <Layout>
      <div className="accesibilidad">
        <h1>Accesibilidad</h1>
        <Accordion items={accordionItems} />
      </div>
    </Layout>
  )
}

export default Accesibilidad
