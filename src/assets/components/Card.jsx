import { useState } from "react";
function Card({ image, name, description, productId, agregarAlCarrito, price }) {



    const handleAgregarCarrito = () => {
        agregarAlCarrito(productId, name, image, price);
        alert("se agrego al carrito"); //<--- opcional
    };


    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{"$" + price}</p>

                <button onClick={handleAgregarCarrito} className="btn btn-danger">Agregar al Carrito</button>
                {/* <h6>ID = {productId}</h6> */}   {/*<-- muestra el id de los productos. Lo use para pruebas */}
            </div>
        </div>
    );
}

export default Card;
