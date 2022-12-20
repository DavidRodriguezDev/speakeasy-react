import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Title from '../../components/Titlte/Title'
import "./Whisky.scss"

const Whisky = () => {
  return (
    <div className='b-whisky__container'>
      <Title text={"WHISKY"}></Title>
      <article className='b-whisky__history'>
            <section className='b-whisky__section'>
                <h2 className='b-whisky__titles'>HISTORIA</h2>
                <p> 
                    El término whisky viene de la pronunciación inglesa de la palabra galéica <i>"uisge beatha"</i> que significa <i>"agua de la vida"</i>.
                    El primer escrito conocido de la producción de whisky escocés es una factura de 1494 en la que aparecen "vainas de malta" para la 
                    producción de <b>Aqua Vitae</b>.
                </p>
                <p>
                    A principios del SXIX, más de la mitad del whisky escocés se consumía de forma ilegal, evadiendo el pago de impuestos. En 1823 se aprobó la Ley
                    de Impuestos Especiales que permitía la destilación de whisky a cambio de una tasa de 10 libras y un pago fijo por cada galón de licor.
                </p>
                <p>
                   Gracias a cócteles clásicos como <b>Rob Roy, Rusty Nail</b> y <b>Blood & Sand</b>, el whisky siempre tendrá un lugar en la historia del cóctel pero se recomienda
                   prudencia a la hora de experimentar con él, debido al complejo sabor del destilado.
                </p>
            </section>
            <section className='b-whisky__section'>
                <h2 className='b-whisky__titles'>ELABORACIÓN</h2>
                <p>
                    El whisky escocés se produce casi exclusivamente a partir de la <b>cebada, trigo</b> y <b>maíz</b>. La producción se divide en <b>5 etapas</b>: malteado, 
                    maceración, fermentación, destilado y maduración.
                </p>
                <h3 className='b-whisky__titles--sec'>Malteado</h3>
                <p>
                    Solo se maltea la cebada y empieza cuando se moja el grano para iniciar el proceso de germinación necesario para que el almidón acumulado 
                    en el grano se convierta en azúcares fermentables. Después se detiene la germinación mediante el <b>secado</b> durante dos días. Si se utiliza
                    la turba para ello, esta dotará al producto final de evidentes sabores terrosos, medicinales y ahumados.
                </p>
                <h3 className='b-whisky__titles--sec'>Maceración</h3>
                <p>
                    Una vez el grano se ha secado se pasa por un molino de grano creando una harina llamada <i>"Grist"</i>. A continuación se le añade agua tibia en 
                    grandes contenedores llamados <i>"mash tuns"</i>.
                </p>
                <p>
                    El agua azucarada llamada <i>"wort"</i> se enfría antes de pasar a la fermentación.
                </p>
                <h3 className='b-whisky__titles--sec'>Fermentación</h3>
                <p>
                    Una vez que el mosto se ha enfriado se pasa a cubas de fermentación añadiéndole levaduras durante 3 días. En este proceso el líquido obtenido
                    alcanza unos 8-9% acohólicos.
                </p>
                <h3 className='b-whisky__titles--sec'>Destilación</h3>
                <p>
                    El líquido con esa baja graduación parecido a la cerveza al que se le llama <i>"wash"</i> es pasado a alambiques para destilarlo <b>dos veces</b>, incluso
                    a veces tres.
                </p>
                <h3 className='b-whisky__titles--sec'>Maduración</h3>
                <p>
                    Generalmente este proceso es al que se le considera más importante. Se suele envejecer el whisky en barricas de roble procedentes de la 
                    iindustria del bourbon.
                    Como mínimo se le deja envejecer 3 años. la declaración de edad de la botella escocés significa que el whisky de la botella ha madurado
                    por lo menos el tiempo mencionado en la etiqueta.
                </p>
            </section>
            <section className='b-whisky__section'>
                <h2 className='b-whisky__titles'>CLASIFICACIÓN</h2>
                <p>Existen cinco categorías de whisky escocés:</p>
                <h3 className='b-whisky__titles--sec'>Single grain whisky</h3>
                <p>
                    El whisky de <b>grano</b> se destila en alambique de columna en una sola destilería. Normalmente hecho de <b>maíz</b> o de <b>trigo</b>
                    con al menos un 10% de cebada malteada. Se madura como <b>mínimo</b> 3 años y después de la maduración se 
                    suele mezclar cono whisky de malta para producir <i>Blended Scotch Whisky</i>.
                </p>
                <h3 className='b-whisky__titles--sec'>Single malt whisky</h3>
                <p>
                    El <b>single mask</b> whisky se produce en una sola destilería  con un 100% de cebada malteada que a menudo se seca con turba. Se madura en 
                    barrica de roble durante <b>mínimo</b> 3 años.
                </p>
                <h3 className='b-whisky__titles--sec'>Blended scotch whisky</h3>
                <p>
                    Es el resultado de la <b></b>mezcla de al menos un <b>single grain whisky</b> y un <b>single malt</b> whisky. La mayoría de las mezclas suelen contener 10 
                    tipos diferentes de whisky (y todos con una maduración <b>mínima</b> de 3 años). Es el tipo de whisky escocés más popular y se mezclan una vez
                    los whiskies han madurado por separado.
                </p>
                <h3 className='b-whisky__titles--sec'>Blended malt whisky</h3>
                <p>
                    Es sencillamente la <b>mezcla</b> de dos o más whiskies de malta de diferentes destilerías. Se diferencia del anterior porque <b>no contiene</b> ningún
                    whisky de <b>grano</b>.
                </p>
                <h3 className='b-whisky__titles--sec'>Single cask</h3>
                <p>
                    El whisky tiene que ser extraído de una sola barrica y no se ha de haber mezclado con ningún otro whisky. Este tipo de whisky es más 
                    <b>exclusivo</b> ya que no se reducen con agua antes de ser embotellados.
                </p>
            </section>
        </article>
        <div className='b-position-nav'>
            <NavBar></NavBar>
        </div>
    </div>
  )
}

export default Whisky