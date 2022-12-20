import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./Gin.scss"

const Gin = () => {
  return (
    <div className='b-gin__container'>
      <article className='b-gin__history'>
            <section className='b-gin__section'>
                <h2 className='b-gin__titles'>HISTORIA</h2>
                <p>Gin, o su predecesor, la ginebra, habría sido producido por primera vez en la década de 1570 en la pequeña ciudad holandesa de <b>Leiden</b>, por
                    el profesor <b>Silvius de Bouve</b>. Mezcló bayas de enebro y vino para utilizar la mezcla como diurético (para aliviar enfermedades de la vesícula 
                    y trastornos renales).
                </p>
                <p>
                    Se convirtió en la bebida preferida entre los soldados y ciudadanos ingleses que nombraron al nuevo destilado como <i>“coraje holandés”</i> 
                    y se convirtió desproporcionadamente popular en Inglaterra.
                </p>
                <p>
                    En la época de la <b>Ley Seca</b>, se elaboraba en alambiques caseros y se denominaba <i>“bathtub gin” o “gin de bañera”</i>. Dado que el gin no requería 
                    de añejamiento y el hecho de que su coste y riesgo de producción eran bajos, rápidamente se convirtió en el gin preferido por los jefes 
                    del mercado negro del alcohol.
                </p>
            </section>
            <section className='b-gin__section'>
                <h2 className='b-gin__titles'>ELABORACIÓN</h2>
                <p>
                    El ingrediente clave en la elaboración del gin es un alcohol neutro procedente de destilación en columna,
                     normalmente procedente de grano, con un volumen alcohólico del 96%.
                </p>
                <p>
                    Una sanción en la legislación de la Unión Europea determina que las bayas de enebro sean el ingrediente predominante en el gin. 
                    Más allá de eso, se utilizan muchos otros ingredientes, pero el cilantro, la piel de limón y la raíz de Angélica se consideran 
                    los agentes potenciadores del sabor más comúnmente utilizados en la elaboración del gin. 
                </p>
            </section>
            <section className='b-gin__section'>
                <h2 className='b-gin__titles'>DESTILACIÓN</h2>
                <p>Existen <b>tres diferentes métodos</b> de destilación y aromatización del gin. El método escogido determinará dos aspectos importantes: 
                    la intensidad aromática y el tipo de gin deseado.
                </p>
                <h3 className='b-gin__titles--sec'>Composición en frío (blended gin/mezclado)</h3>
                <p>
                    Es el método más barato y a su vez el menos común. El proceso comienza con la extracción de aceite de las bayas de enebro y otras hierbas 
                    y especias. Estos extractos se mezclan posteriormente con el detallado neutro procedente de la columna.
                    Este gin es menos especiado y aromático de lo habitual y no puede ser etiquetado como <i>“London Dry Gin”</i> o gin destilado.
                </p>
                <h3 className='b-gin__titles--sec'>Gin destilado</h3>
                <p>Este es el método más común para la elaboración del gin. En el proceso las bayas de enebro, junto a todas las especias escogidas, 
                    se añaden al alcohol neutro procedente de destilación en columna, seguido de una nuevas destilación en alambique.
                </p>
                <h3 className='b-gin__titles--sec'>Gin de sabores extraídos (racked o infusión de sabores)</h3>
                <p>
                    Algunas casas productoras de gin prefieren que su mezcla no libere demasiados aromas de la mezcla de hierbas y especias.
                    Para ello sitúan una cesta que contiene dicha mezcla en la parte superior del aparato de destilación.
                    Mientras los vapores del destilado ascienden hacia la parte superior de la caldera, la mezcla entra en contacto con los vapores alcohólicos
                     para así extraer los aromas.
                </p>
            </section>
            <section className='b-gin__section'>
                <h2 className='b-gin__titles'>CLASIFICACIÓN</h2>
                <p>Existen <b>cuatro</b> tipos distintos de gin. La composición de sabor y aroma difieren bastante entre ellos.</p>
                <h3 className='b-gin__titles--sec'>London Dry</h3>
                <p>Se elabora a partir de licores neutros, usualmente compuestos de varios tipos de grano y generalmente destilado en columna.
                    <b>No necesariamente</b> debe proceder de Londres, el nombre se refiere al método de elaboración con anteriormente hemos mencionado 
                    y no a la localización geográfica de su elaboración.
                </p>
                <h3 className='b-gin__titles--sec'>Plymouth Dry</h3>
                <p>
                    El nombre proviene de la ciudad portuaria inglesa. Según la ley inglesa este gin solo se puede elaborar dentro de dicha región.
                    Comparado con la variedad London Dry, este gin <b>no es tan seco</b> sino que tiene un sabor a bayas de enebro más intenso y abundante.
                </p>
                <h3 className='b-gin__titles--sec'>Old Tom</h3>
                <p>A diferencia de los demás, contiene un matiz dulce en su sabor como resultado del proceso de endulzado para ocultar las impurezas
                     causadas por la falta de destilación.
                </p>
                <h3 className='b-gin__titles--sec'>Ginebra - Genever</h3>
                <p>
                    También conocida como <i>“Scheidam”</i> o Ginebra Holandesas, se elabora a partir de granos de centeno y cebada malteada.
                    Durante el proceso de fermentación se añaden a la mezcla las bayas de enebro y demás extractos naturales dándole así unas cualidades
                    aromáticas mucho más intensas que en otros tipos de gin.
                    Por último, este producto se destila en alambiques.
                </p>
                <p>
                    Se puede clasificar a su vez en <b>dos clases</b>:
                </p>
                <p>
                    <i>Oude genever" y "Jonge genever"</i>". Esta clasificación puede llevar a confusión ya que no refiere al añejamiento de la mezcla sino al sabor del 
                    destilado. <b>Oude genever</b> tienen un sabor más fuerte e intenso mientras que <b>Jonge genever</b> tiene un sabor más suave y redondeado. 
                </p>
            </section>
        </article>
        <div className='b-position-nav'>
            <NavBar></NavBar>
        </div>
    </div>
  )
}

export default Gin