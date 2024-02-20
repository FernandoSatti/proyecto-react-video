import logo from "../../public/img/logo.png";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Categories from "./categories";
import Packs from "./Packs";
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
            <div className="div-main">
    <h1 className="h1-header">Contrata nuestro servicio como editores de video</h1>
    <p>llevamos años de experiencia con diferentes categorías de videos</p>
    <a href="#">
      <button className="button-header">
        <span>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
          CONOCE NUESTROS SERVICIOS
        </span>
      </button>
    </a>
  </div>
  <div className="video-container">
    <video autoPlay muted loop>
      <source src="../liquid-divinum_1.webm" type="video/webm" />
    </video>
  </div>
            <Categories />
            
            <div className="grid-item">
                <ItemList products={products} />
            </div>
            <Packs />
        </main>
    );
}
