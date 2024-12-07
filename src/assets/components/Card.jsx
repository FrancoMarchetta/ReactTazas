import { useState } from "react";
function Card({ image, name, description, id, agregarAlCarrito, price }) {
    const handleAgregarCarrito = () => {
        agregarAlCarrito(id, name, image, price);
        alert("Se agregó al carrito");
    };

    return (
        <div className="card" style={{ width: "18rem" }}>

            <img
                src={image}
                className="card-img-top"
                alt={name}
                style={{
                    height: "12rem",
                    objectFit: "cover",
                }}
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{"$" + price}</p>
                <button onClick={handleAgregarCarrito} className="btn btn-danger">
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
}

export default Card;
