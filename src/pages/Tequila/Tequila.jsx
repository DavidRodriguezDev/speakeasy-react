import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Title from '../../components/Titlte/Title'
import "./Tequila.scss"

const Tequila = () => {
  return (
    <div className='b-tequila__container'>
      <Title text={"TEQUILA"}></Title>
      <article className='b-tequila__history'>
            <section className='b-tequila__section'>
                <h2 className='b-tequila__titles'>HISTORIA</h2>
                <p> Muchas de las primeras civilizaciones que habitaban <b>México</b> desde sus orígenes extraían la savia de la planta del <b>agave</b> y la utilizaban en 
                    bebidas. Esta bebida baja en alcohol se la conocía como <i>"Octlí"</i>.
                </p>
                <p>
                    Como la destilación se acababa de introducir en Europa en el SXVI, comenzaron en <b>México</b> a experimentar con la destilación de la
                    bebida, que más tarde se la conocería por el nombre de <i>"Pulque"</i> hasta nuestros días. A este nuevo destilado se le llamó <b>vino de mezcal</b>,
                    que se podía definir como el alcohol del agave horneado.
                </p>
                <p>
                    Uno de los productores artesanales más prominentes en el SXVII fue <b>José Antonio de Cuervo</b>. En 1795 la primera licencia para producir
                    vino de mezcal se le concedió a la familia Cuervo.
                </p>
                <p>
                    El tequila consiguió su gran expansión internacional durante la época de la <b>Ley Seca</b> en la que enormes cantidades de tequila y <b>mezcal</b>
                    se introducían de contrabando a traves de la frontera mexicana hacia California y Texas.
                </p>
            </section>
            <section className='b-tequila__section'>
                <h2 className='b-tequila__titles'>ELABORACIÓN</h2>
                <p>
                    El tequila, el <b>mezcal</b> y otros destilados con base de agave se elaboran a través de la fermentación del jugo o savia de la planta. Dependiendo
                    de la zona de <b>México</b> y la variedad de agave que se utilice, el destilado recibirá nombres y características diferentes.
                </p>
                <p>
                    Para poder ser etiquetado como tequila solo se puede utilizar <b>agave azul</b>. El <b>agave azul</b> necesita entre 7 y 10 años para estar maduro
                    para la cosecha. Esa larga espera es necesaria para que la planta genere la cantidad de <b>almidón</b> suficiente en su tallo.
                </p>
                <p>
                    Después de la cosecha, los tallos a los que se conoce como <i>"piñas"</i> son llevados a la destilería para prensarlos. Posteriormente se hornean
                    en ollas a presión o se cuecen al vapor en hornos de piedra.
                    Históricamente en la producción del tequila y <b>mezcal</b> se utilizan hogueras excavadas en el suelo que funcionan como hornos. Este método se 
                    utiliza menos ya que aporta un sabor ahumado al destilado final. Dicha característica es un rasgo típico del mezcal pero no muy común en 
                    el tequila.
                </p>
                <p>
                    Trás el proceso de cocción, los tallos se prensan para extraer el líquido azucarado. Dicho jugo se fermenta posteriormente en tanques de acero
                    aportándole generalmente levadura cultivada y agua.
                    La masa fermentada suele destilarse dos veces en <b>alambiques o alquitaras</b> o incluso una tercera destilación mientras que el porcentaje
                    alcohólico previo al embotellado esté entre el 33% y 55%.
                </p>
            </section>
            <section className='b-tequila__section'>
                <h2 className='b-tequila__titles'>CLASIFICACIÓN</h2>
                <p>El tequila es una denominación de origen como el cognac o el champagne. Como tal, la elaboración está sujeta a un estricto conjunto de 
                    regularizaciones para poder utilizar dicho nombre. Estas regularizaciones controlan no solo los ingredientes sino los límites geográficos.
                </p>
                <p>El corazón de la industria del tequila se encuentra en el <b>Estado de Jalisco</b>. Además, el tequila puede elaborarse en los estados vecinos de 
                    Nayarit, Michoacán, Guanajuto y Tamaulipas que se encuentra en la otra parte del país.
                </p>
                <p>
                    Otros destilados del agave siguen sus propias regularizaciones. El más extendido es el <b>mezcal</b>, principalmente producido en <b>Oaxaca</b>.
                </p>
                <p>
                    Además las regularizaciones del tequila especifican que el destilado debe contener un 51% mínimo de <b>agave azul</b>. Cuando el destilado está elaborado
                    completamente de agave azul se le puede etiquetar como <i>"Tequila 100% agave"</i>. En conclusión hay <b>dos tipos</b>: tequila <b>100% agave</b>
                    que debe ser embotellado en México, y tequila que puede venderse a <b>granel</b> y embotellarse fuera del país.
                    Bajo estas dos categorías hay <b>4 subcategorías</b>:
                </p>
                <h3 className='b-tequila__titles--sec'>Blanco (Silver o Plata)</h3>
                <p>
                    Tequila sin añejar o que ha sido embotellado directamente tras su destilación o trás un breve periodo en barriles de acero. De color claro, 
                    esta variedad tiene un sabor y aroma muy similar al del agave puro.
                </p>
                <h3 className='b-tequila__titles--sec'>Reposado (Aged)</h3>
                <p>
                    Tequila que ha sido añejado por un mínimo de 2 meses en pequeñas barricas de roble o barriles gigantes conocidos como <i>"pipones"</i>. Este breve
                    periodo de contacto con la madera añade un ligero matíz a roble en el sabor final.
                </p>
                <h3 className='b-tequila__titles--sec'>Añejo (Extra aged)</h3>
                <p>
                    Este tequila ha sido añejado por un mínimo de un año en barrica de roble. En este caso la madera aporta un sabor a madera más intenso, completamente
                    <b> opuesto</b> al del Reposado.
                </p>
                <h3 className='b-tequila__titles--sec'>Extra añejo (Ultra aged)</h3>
                <p>
                    Tequila que ha sido añejado por un mínimo de 3 años. Fuerte sabor a roble, larga duración en el paladar y un perfil similar al del whisky o ron muy
                    añejados.
                </p>
            </section>
        </article>
        <div className='b-position-nav'>
            <NavBar></NavBar>
        </div>     
    </div>
  )
}

export default Tequila