import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Preference } from "mercadopago";
import { initMercadoPago } from '@mercadopago/sdk-react';
import { Link } from "react-router-dom";


//---------------------------------------------------------





//---------------------------------------------------------
function Carrito({ carrito }) {


    function limpiarCarrito() {
        localStorage.clear();
        window.location.reload();
    }

    const total = carrito.reduce((precioAcumulado, producto) => precioAcumulado + producto.price, 0);



    return (
        <>
            <br />
            <br />
            <br />
            <br />

            <section className="carritoSection">
                <div style={{ marginLeft: "30%", display: "flex" }}>
                    <h1>🛒Carrito de Compras</h1>
                    <button id="botonVaciarCarrito" onClick={limpiarCarrito}>Vaciar Carrito🗑️</button>
                </div>

                {carrito.length === 0 ? (
                    <p style={{ marginLeft: "41%" }}>No hay productos en el carrito.</p>
                ) : (
                    <ul>
                        {carrito.map((producto, index) => (
                            <li key={index}>
                                <img style={{ maxHeight: "2cm", borderRadius: "40px" }} src={producto.image} alt="" />
                                {producto.name} ||{"$" + producto.price}||
                            </li>
                        ))}
                    </ul>
                )}

                <h1 style={{ marginLeft: "80%" }}>total: ${total}</h1>
                <button
                    id="botonPagar"
                    type="button"
                    className="btn btn-danger"
                    onClick={() => window.open('https://link.mercadopago.com.ar/trlab3', '_blank')}
                >
                    Ir a pagar
                </button>



            </section>
        </>
    );
}

export default Carrito;
