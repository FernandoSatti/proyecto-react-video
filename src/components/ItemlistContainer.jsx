import logo from "../../public/img/logo.png";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Categories from "./categories";
export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { cid } = useParams();
    console.log(cid);
    useEffect(() => {
        fetch("../data/services.json")
            .then((response) => response.json())
            .then((prods) => {
                if (cid) {
                    const productos = prods.filter((prod) => prod.category === cid);
                    setProducts(productos);
                } else {
                    setProducts(prods);
                }
            })
            .catch((error) => console.log(error));
    }, [cid]);

    return (
        <main>
            <Categories />
            <div className="grid-item">
                <ItemList products={products} />
            </div>

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
        </main>
    );
}
