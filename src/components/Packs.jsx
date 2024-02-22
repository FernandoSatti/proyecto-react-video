import React from 'react'
import logo from "../../public/img/logo.png";
export default function Packs() {
  return (
    <>
    
    <div id="main-container"></div>
            <section className="section-packs">
                <div className="h2-div">
                    <h2 className="h2-packs">Elige cualquiera de nuestros packs</h2>
                    <img src={logo} alt="logo de pixeledit" className="logo" />
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="title-promo1">
                            <p className="heading">Edicion basica</p>
                        </div>
                        <div className="list1">
                            <ul className="ul-promo">
                                <li>cortes y transiciones</li>
                                <li>edicion de audio</li>
                            </ul>
                        </div>
                        <div className="div-pack">
                            <button className="button-pack">
                                <a href="#">Comprar Pack</a>
                            </button>
                        </div>
                        <p>PixelEdit</p>
                    </div>
                    <div className="card">
                        <div className="title-promo2">
                            <p className="heading">Edicion Intermedia</p>
                        </div>
                        <div className="list2">
                            <ul className="ul-promo">
                                <li>cortes y transiciones</li>
                                <li>edicion de audio</li>
                                <li>mejora de calidad grafica</li>
                            </ul>
                        </div>
                        <div className="div-pack">
                            <button className="button-pack">
                                <a href="#">Comprar Pack</a>
                            </button>
                        </div>
                        <p>PixelEdit</p>
                    </div>
                    <div className="card">
                        <div className="title-promo3">
                            <p className="heading">Edicion Avanzada</p>
                        </div>
                        <div className="list3">
                            <ul className="ul-promo">
                                <li>cortes y transiciones</li>
                                <li>edicion de audio</li>
                                <li>mejora de calidad grafica</li>
                                <li>tips de aumento de audiencia</li>
                                <li>ideas de contenido</li>
                            </ul>
                        </div>
                        <div className="div-pack">
                            <button className="button-pack">
                                <a href="#">Comprar Pack</a>
                            </button>
                        </div>
                        <p>PixelEdit</p>
                    </div>
                </div>
            </section>
    </>
  )
}
