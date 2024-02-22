import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import ItemCount from "./ItemCount";
import logo from '../../public/img/logo.png';
export default function Checkout() {
  return (
    <div className="form-container">
      <div className="div-logo-form">
        <img src={logo} alt="" className="logo-form" />
      </div>
      
      <form className="form" action="">
        <div className="form-group">
          <label>Nombre completo:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Telefono:</label>
          <input type="number" />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="form-group">
          <label for="textarea">que edicion deseas aplicar?</label>
          <textarea
            name="textarea"
            id="textarea"
            rows="10"
            cols="50"
            required=""
          >
            {" "}
          </textarea>
        </div>
        <div className="button-upload">
          <button className="form-submit-btn" type="submit">
            Comprar Servicio
          </button>
          <div class="upload">
          <input class="upload-input" name="file" type="file"/>
          <IoCloudUploadOutline className="icon" type="file"/>
          </div>
        </div>
        <span className="price-cart">precio: a definir!</span>
        <ItemCount/>
      </form>
    </div>
  );
}
