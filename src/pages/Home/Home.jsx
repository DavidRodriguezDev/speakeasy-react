import React from 'react'
import "./Home.scss"

const Home = () => {
  return (
    <div className='b-home__container'>
        <div className='b-home__hero'>   
            <h1 className='b-home__titles'>Adéntrate en la clandestinidad de la Ley Seca</h1>
            <p>Se llamaron Speakeasy a los locales ilegales abiertos durante los años en los que estuvo vigente la Ley Seca
            en Estados Unidos (1920-1933)</p>
        </div>
        <article className="b-home__history">
            <section >
                <div className='b-home__beginnings'>
                    <h2 className='b-home__titles'>LOS COMIENZOS</h2>
                    <h3>Todo comenzó en 1919, cuando se  se ratificó la 18.ª enmienda a la Constitución de Estados Unidos, que prohibía 
                    la manufactura, la venta y el
                    transporte de bebidas alcohólicas.</h3>
                    <p><b>Andrew J. Volstead</b>, senador republicano por Minnesota, fue quien promovió el Acta de Prohibición, la ley que implementó la
                    <i>18.ª enmienda a la Constitución</i>.
                    En 1920, la Prohibición supuso la abolición radical de todo tipo de alcohol (cerveza, vino, destilados de alta graduación...),
                    con ciertas excepciones, 
                    como el vino litúrgico de curas católicos y rabinos judíos (los luteranos usaban mosto o zumo filtrado de uva).</p>
                    <p>Durante la <b>Prohibición</b>, fue habitual la destrucción de bebidas alcohólicas y su publicación en fotografías con intención propagandística. La nueva norma constitucional
                    se convirtió en un problema geopolítico, pues Estados Unidos estaba rodeado de productores de brebajes potentes.</p>
                </div>  
            </section>
            <section>
                <div className='b-home__wishes'>
                    <h2 className='b-home__titles'>LOS ANHELOS DE PROHIBICIÓN</h2>
                    <h3>Tras acabar la Primera Guerra Mundial, la sociedad estadounidense decidió disfrutar de la vida.</h3><p>Para paliar
                    esos aires de libertad, los sectores más conservadores del país trataron de imponer unas reglas morales. El mayor de sus anhelos: que el
                    <b> Congreso prohibiera el consumo de bebidas alcohólicas.</b></p>
                    <p>Las cruzadas contra el consumo de alcohol fueron encabezadas por <b>asociaciones ultraconservadoras</b>. Los
                    miembros que las formaban aseguraban que acabaría con la delincuencia de las ciudades.</p> 
                </div>
            </section>
            <section>
                <div className='b-home__impact'>
                    <h2 className='b-home__titles'>LAS CONSECUENCIAS</h2>
                    <h3>Las consecuencias fueron muy contrarias ya que, no solo favorecieron al <b>tráfico ilegal de licores</b>, sino 
                    que incrementó el número de <b>bandas mafiosas</b>.</h3>
                    <p>Si en 1919 las cárceles federales albergaban a unos <b>4000 reclusos</b>, en 
                    1932 esa cifra ascendió hasta casi los <b>27000 reclusos</b>.</p>
                    <p>El auge de la delincuencia estaba asociado al incremento de las <b>mafias armadas</b> que competían para tener el 
                    <b>control de la destilación</b> y la <b>distribución ilegal de licores</b>.</p>
                </div>
            </section>
            <section>
                <div className='b-home__end'>
                    <h2 className='b-home__titles'>EL FIN DE LA LEY SECA</h2>
                    <h3>Las destilerías y los Speakeasy fueron controlados por gángsteres, siendo el más conocido <b>Al Capone,</b></h3><p>que en solo 
                    doce años consiguió levantar un imperio en <b>Chicago</b> que incluía prostíbulos, Speakeasy y casas de juego.</p>
                    <p>La ola de criminalidad que asoló al país y la corrupción asociada hizo que el Congreso la derogara el 
                    5 de diciembre de 1933.</p>
                </div>
            </section>
        </article>
    </div>
  )
}

export default Home