import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./Vodka.scss"

const Vodka = () => {
  return (
    <div className='b-vodka__container'>
      <article className='b-vodka__history'>
            <section className='b-vodka__section'>
                <h2 className='b-vodka__titles'>HISTORIA</h2>
                <p> 
                    La historia del vodka no es tan sencilla ni tan clara como la apariencia del propio destilado. Todo depende del camino que se elija. Se puede 
                    dividir en <b>dos</b> versiones: <b>la rusa</b> y <b>la polaca</b>. Un hecho verídico es que fueron los polacos quienes bautizaron el destilado con el nombre de 
                    vodka en el SVIII. Por otro lado Rusia ha tenido en relación con la historia del vodka una mayor influencia y a partir de ahora nos
                    centraremos en la versión rusa.
                </p>
                <p>
                    En <b>Rusia</b> originalmente se congelaba el vino para después recoger el líquido alcohólico que quedaba sin congelar. En los siglos posteriores
                    el vodka se consumía principalmente por sus beneficios medicinales, de ahí el nombre de <i>"Zhiznennia Voda"</i>, que en ruso significa <i>"agua de 
                    la vida"</i>, y vodka significa en diminutivo <i>"agüita"</i>.
                </p>
                <p>
                    En 1780 <b>Theodore Lowitz</b>, que trabajaba como alquimista para el Zar ruso, descubrió que cuando se filtraba a través de <b>carbón vegetal</b>, el vodka
                    se suavizaba.
                </p>
                <p>
                    Sin embargo el vodka en aquel momento era solamente consumido en Europa del Este. Nada cambió hasta el año 1933, cuando Rudolf Kunett adquirió
                    los derechos para producir el extremadamente popular vodka <i>"Smirnoff"</i>.
                </p>
                <p>
                    Desde los años 60 hasta mediados de los 90, el vodka fue de lejos el destilado más vendido del mundo.
                </p>
                <p>
                    En <b>Escandinavia</b>, el vodka apareció durante el SXV, cuando aun se elaboraba mediante fermentación de <b>grano</b>. En <b>Suecia</b>, de donde es original
                    el vodka escandinavo , recibía el nombre de <i>"bränvinn"</i>.
                </p>
            </section>
            <section  className='b-vodka__section'>
                <h2 className='b-vodka__titles'>PRODUCCIÓN</h2>
                <p>
                    El vodka se elabora mayormente con cultivos como los <b>granos</b> y las <b>patatas</b>. En teoría el vodka se puede elaborar a partir de cualquier
                    cosa que contenga almidón o azúcar.
                </p>
                <h3 className='b-vodka__titles--sec'>Grano</h3>
                <p>
                    Más del 90% de la producción global del vodka procede del grano. A menudo se utiliza <b>grano malteado</b> para utilizar el azúcar del almidón
                    en el proceso de fermentación. 
                </p>
                <p>
                    El <b>trigo</b> y la <b>cebada</b> son las dos especies de grano más utilizadas para la producción de vodka.
                </p>
                <h3 className='b-vodka__titles--sec'>Patata</h3>
                <p>
                    Respecto a la elaboración de vodka mediante <b>patatas</b>, en el proceso aparecen <i>aceites de fusel</i> que son eliminados con la disulución en agua en 
                    la primera destilación. Al no disolverse dichos aceites, son retirados posteriormente con facilidad. Estos aceites son causados por un 
                    aminoácido en las levaduras utilizadas para la fermentación.
                </p>
                <p>
                    El vodka se puede embotellar tan pronto como la destilación y el proceso de filtración hayan terminado, por lo tanto el añejamiento no es
                    necesario.
                </p>
            </section>
            <section  className='b-vodka__section'>
                <h2 className='b-vodka__titles'>CLASIFICACIÓN</h2>
                <p>Al igual que hablábamos de las dos formas de elaboración, se pueden clasificar por ubicación geográfica:</p>
                <h3 className='b-vodka__titles--sec'>Europa del Este</h3>
                <p>
                    En esta categoría encontramos al vodka producido en Rusia y Polonia, que siguen siendo los mayores productores.
                </p>
                <h3 className='b-vodka__titles--sec'>Resto de mundo Occidental</h3>
                <p>
                    Aquí aparece el vodka producido por Estados Unidos, Suecia y Francia que representan el 80% de toda la producción occidental.
                </p>
            </section>
        </article>
        <div className='b-position-nav'>
            <NavBar></NavBar>
        </div>
    </div>
  )
}

export default Vodka