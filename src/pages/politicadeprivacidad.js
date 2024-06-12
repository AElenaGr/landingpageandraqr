import React from "react"
import Layout from '../components/layout'
import Accordion from '../components/accordion'
import '../components/layout.css'

const PoliticaDePrivacidad = () => {
  const accordionItems = [
    {
      title: 'Protección de Datos',
      content: (
        <>
          <p>En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de datos de las personas físicas en lo que respecta al tratamiento de datos personales, adaptado al derecho español por el Real Decreto Legislativo 5/2018, de 17 de julio; así como a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales en lo que se oponga a lo anterior, el titular de la autorización acepta que los datos que figuran en la autorización se incorporen al fichero correspondiente de Patrimonio Nacional.</p>
          <p>La finalidad de este tratamiento es el mantenimiento de la autorización, en base al Real Decreto 496/1987, de 18 de marzo, por el que se aprueba el Reglamento de la Ley 23/1982, de 16 de junio, reguladora del Patrimonio Nacional. Artículo 27 y el Real decreto 214/2014 de 28 marzo, artículo 83-d. Los datos serán comunicados, únicamente, para sus funciones de control económico y de legalidad a la Intervención General del Estado y al Tribunal de Cuentas. Los datos serán conservados durante el tiempo necesario para cumplir con la finalidad para la que se han recabado y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.</p>
          <p>Será de aplicación lo dispuesto en la normativa de archivos y patrimonio documental español. Puede ejercitar sus derechos de acceso, rectificación, supresión y portabilidad de sus datos, de limitación y oposición a su tratamiento, así como a no ser objeto de decisiones basadas únicamente en el tratamiento automatizado de sus datos, cuando procedan, a través de la sede electrónica en la dirección de correo dpd@mpr.es. El derecho a presentar una reclamación podrá ejercerlo ante la Agencia Española de Protección de Datos. Gerente del Consejo de Administración del Patrimonio Nacional Palacio Real de Madrid Calle Bailén, s/n – 28071 (Madrid).</p>
        </>
      ),
    },
    {
      title: 'Responsable de los Datos',
      content: (
        <>
          <p><strong>Identidad:</strong> Consejo de Administración del Patrimonio Nacional.</p>
          <p><strong>NIF:</strong> S2801002C</p>
          <p><strong>Dirección postal:</strong> Palacio Real. Calle Bailén s/n - 28071- Madrid</p>
          <p><strong>Teléfono:</strong> 34 914 548 700</p>
          <p><strong>Ejercicio de derechos de afectados:</strong> dpd@mpr.es o en la dirección <a href="https://sedempr.gob.es/es/proteccion_de_datos">https://sedempr.gob.es/es/proteccion_de_datos</a></p>
          <p><strong>Contacto Delegado Protección de Datos:</strong> dpd@mpr.es</p>
        </>
      ),
    },
    {
      title: 'Conservación',
      content: (
        <p>CAPN desarrolla su actividad de forma continuada y le informa que los datos objeto de tratamiento serán conservados mientras se mantenga una relación contractual o comunicación habitual y serán destruidos una vez finalizados los plazos legales vigentes que regulan las relaciones comerciales y tributarias, o usted ejerza de forma legítima alguno de sus derechos.</p>
      ),
    },
    {
      title: 'Derechos',
      content: (
        <>
          <p>Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.</p>
          <p>Siempre que no contravenga la legislación vigente aplicable o acuerdos contractuales entre las partes, los interesados pueden solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o defensa de reclamaciones, gestión de conflictos entre las partes o el mantenimiento efectivo de la relación entre las partes.</p>
          <p>En las circunstancias que lo permitan y por motivos relacionados con su situación particular, los interesados pueden oponerse al tratamiento de sus datos. CAPN dejará de tratar los datos, los mantendrá exclusivamente en estado bloqueado para atender motivos legítimos imperiosos, el ejercicio o la defensa de posibles reclamaciones, o cumplimiento de la legislación vigente.</p>
          <p>Puede ejercitar sus derechos de acceso, rectificación, supresión y portabilidad de sus datos, de limitación y oposición a su tratamiento, así como a no ser objeto de decisiones basadas únicamente en el tratamiento automatizado de sus datos, cuando procedan, a través de <a href="https://sedempr.gob.es/es/proteccion_de_datos">https://sedempr.gob.es/es/proteccion_de_datos</a> o en la dirección de correo electrónico dpd@mpr.es.</p>
          <p>CAPN le informa que tiene derecho a presentar una reclamación que podrá ejercerlo ante la Agencia Española de Protección de Datos.</p>
        </>
      ),
    },
    {
      title: 'Legitimación',
      content: (
        <>
          <p>El tratamiento de sus datos es realizado al amparo legal de atender las peticiones de sus consultas, quejas, sugerencias, felicitaciones, ofertas, solicitudes o contratación de servicios o productos, según sea el caso.</p>
          <p>Las notificaciones informativas están basadas en el consentimiento que se le solicita, sin que en ningún caso la retirada de este consentimiento condicione la ejecución de los contratos que puedan existir entre las partes o atender las solicitudes o consultas demandadas por el interesado.</p>
        </>
      ),
    },
    {
      title: 'Destinatarios',
      content: (
        <>
          <p>Los datos personales que nos facilita para atender las peticiones de sus consultas, quejas, sugerencias, felicitaciones, ofertas, solicitudes o contratación de servicios o productos, no serán comunicados a otras empresas sin solicitarle previamente su consentimiento.</p>
          <p>Los datos personales que puedan ser considerados como de categorías especiales no serán comunicados a terceros, salvo que expresamente figure en las condiciones particulares de la oferta de prestación de servicios contratada.</p>
        </>
      ),
    },
    {
      title: 'Procedencia de los Datos',
      content: (
        <p>Los datos personales que tratamos proceden fundamentalmente del interesado y de las relaciones comerciales o contractuales. En caso de que los datos no procedan directamente del interesado o cuyo tratamiento no sea compatible con las finalidades existentes le pediremos previamente autorización para que nos facilite su consentimiento para el nuevo tratamiento.</p>
      ),
    },
    {
      title: 'Seguridad',
      content: (
        <>
          <p>CAPN le informa que tiene implantadas las medidas de seguridad de índole técnica y organizativas necesarias que garanticen la seguridad de sus datos de carácter personal y eviten su alteración, pérdida, tratamiento y/o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos, ya provengan de la acción humana o del medio físico o natural.</p>
          <p>La comunicación de datos por parte del usuario utilizando los medios habilitados, supone la aceptación de estas cláusulas, necesarias para el establecimiento y mantenimiento de la relación entre las partes.</p>
          <p>Nuestra política de protección de datos puede variar debido a posibles cambios legislativos o de los criterios procedentes de la Agencia de Protección de Datos, pero en todo caso, se tratará de variaciones necesarias para adecuar nuestra política a la legislación vigente y a los criterios de protección de los usuarios y clientes. En ese sentido, de producirse algún cambio le mantendremos informado a través de esta misma página.</p>
        </>
      ),
    },
  ]

  return (
    <Layout>
      <div className="politicadeprivacidad">
        <h1>Política de Privacidad</h1>
        <Accordion items={accordionItems} />
      </div>
    </Layout>
  )
}

export default PoliticaDePrivacidad
