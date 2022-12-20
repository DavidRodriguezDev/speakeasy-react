import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./Rum.scss"

const Rum = () => {
  return (
    <div className='b-rum__container'>
      <article className='b-rum__history'>
            <section className='b-rum__section'>
                <h2 className='b-rum__titles'>HISTORIA</h2>
                <p> La historia del ron se remonta a la época del <b>descubrimiento de América</b>. Las mercancias en aquella época consistian en su mayoría de azúcar.
                    Se consideraba un símbolo de riqueza y poder debido a su importancia para la producción de alimentos.
                    Cuando <b>Cristobal Colón</b> descubrió América se llevo consigo las cañas de azúcar. No fue hasta cientos de años más tarde cuando se empezó a destilar
                    el derivado de la producción de azúcar.
                </p>
                <p>
                    De cualquier modo, no fue hasta que la destilación en columnas hizo su aparición en el caribe insular, alrededor de 1848, que la elaboración del 
                    ron fue realmente industrializada. La distribución de ron en el mundo occidental debe su éxito a la fundación de <i>Bacardi</i> en 1862.            
                </p>
                <p>
                   Durante los años siguientes, el ron disfrutó de una enorme popularidad, especialmente durante la <b>Ley Seca</b>, donde los llamados corredores del
                   ron <i>(rum-runners)</i> ayudaron a aprovisionar en el mercado americano de destilados ilegales traídos de las islas caribeñas.
                </p>
            </section>
            <section className='b-rum__section'>
                <h2 className='b-rum__titles'>ELABORACIÓN</h2>
                <p>
                    El ron es un destilado elaborado a base de la caña de azúcar. Se puede escoger entre utilizar directamente el <b>jugo de la caña</b> 
                    (Ron Agrícola)" o destilar el derivado del proceso de refinado del azúcar, <b>la melaza</b>(Ron Industrial).
                </p>
                <p>
                    Al fabricar elron, es  necesario tener <b>azúcar, agua, levadura</b> y la correcta temperatura. El proceso de fermentación tiene un significado de 
                    vital importancia en el caracter final del ron. La mezcla fermentada reacciona según la duración y la temperatura de la fermentación generando
                    más cuerpo, sabores y aromas susceptibles de ser transmitidos.
                </p>
            </section>
            <section className='b-rum__section'>
                <h2 className='b-rum__titles'>DESTILACIÓN - AGING</h2>
                <p>
                    A fin de aumentar la intensidad alcohólica, el fluido debe ser destilado para eliminar el agua. En este punto se puede seleccionar entre
                    destilación de <b>alambique</b> o en <b>columna de destilación</b>.
                </p>
                <h3 className='b-rum__titles--sec'>Aging</h3>
                <p>
                   El concepto de <b>aging</b> se refiere al añejamiento en una barrica de roble usada previamente para whisky americano.
                </p>
                <p>
                    La duración del estacionamiento en barrica la determina la destilería y puede variar en la cantidad de años. A lo largo de este periodo
                    parte del alcohol se evapora de las barricas (a esto se le llama <i>"La porción de los ángeles"</i>).
                </p>
            </section>
            <section className='b-rum__section'>
                <h2 className='b-rum__titles'>CLASIFICACIÓN</h2>
                <p>
                    Normalmente el ron se puede dividir en <b>cuatro</b> categorías diferentes, que se encuentran en gran medida geograficamente determinadas.
                </p>
                <h3 className='b-rum__titles--sec'>Las islas francesas</h3>
                <p>
                    El ron de las islas francesas es casi exclusivamente ron agrícola, en contraste con la mayoría de ron de las islas caribeñas, procede
                    directamente del <b>jugo de la caña</b> y no de las melazas. Esto se debe a que tradicionalmente los franceses utilizaban sus fábricas
                    de remolacha para la producción de azúcar, generando un superávit en la producción.
                </p>
                <h3 className='b-rum__titles--sec'>Cuba</h3>
                <p>
                    Este tipo de ron ha contribuído a la distribución a escala global del ron. A comienzos de la década de 1860, cuando se introdujo en Cuba
                    la destilación en columna, se satisfizo la creciente demanda de un ron más dulce y con un sabor neutro.
                    Solo <b>Havana Club</b> porta el sello de garantía cubano que certifica la elaboración del ron en <b>Cuba</b>.
                </p>
                <h3 className='b-rum__titles--sec'>Jamaica</h3>
                <p>
                    Este ron posee todas las cualidades de las producciones de ron original. Es oscuro, muy aromático y tiene su propio estilo individual.
                    Casi todo el ron jamaicano se destila en alambique.
                </p>
                <h3 className='b-rum__titles--sec'>Guayana</h3>
                <p>
                    Este ron se caracteriza por una expresión dulce e intensa y destaca como un <b>híbrido</b> entre la variedad de América del Sur y Cuba. La ubicación  
                    geográfica del país contribuye a que el ron posea ambas cualidades: la sequedad del clima continental y el oscuro y denso aroma, la textura de cuerpo
                    completo de la tierra fértil
                </p>
            </section>
        </article>
        <div className='b-position-nav'>
            <NavBar></NavBar>
        </div>
    </div>
  )
}

export default Rum