import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Preference } from "mercadopago";
import { initMercadoPago } from '@mercadopago/sdk-react';
import { Link } from "react-router-dom";
function Carrito({ carrito }) {
    const [cantidadProductos, setCantidadProductos] = useState({});

    useEffect(() => {
        // Inicializa el estado cuando cambia el carrito
        const cantidadesIniciales = carrito.reduce(
            (acc, producto) => ({ ...acc, [producto.id]: 1 }),
            {}
        );
        setCantidadProductos(cantidadesIniciales);
    }, [carrito]); // Se ejecuta cada vez que el carrito cambia

    const limpiarCarrito = () => {
        localStorage.clear();
        window.location.reload();
    };

    const sumarCantidad = (id) => {
        setCantidadProductos((prevState) => ({
            ...prevState,
            [id]: prevState[id] + 1,
        }));
    };

    const restarCantidad = (id) => {
        setCantidadProductos((prevState) => ({
            ...prevState,
            [id]: Math.max(prevState[id] - 1, 0),
        }));
    };

    const total = carrito.reduce(
        (precioAcumulado, producto) =>
            precioAcumulado + producto.price * (cantidadProductos[producto.id] || 1),
        0
    );

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <section className="carritoSection">
                <div style={{ marginLeft: "30%", display: "flex" }}>
                    <h1>🛒 Carrito de Compras</h1>
                    <button id="botonVaciarCarrito" onClick={limpiarCarrito}>
                        Vaciar Carrito 🗑️
                    </button>
                </div>

                {carrito.length === 0 ? (
                    <p style={{ marginLeft: "41%" }}>No hay productos en el carrito.</p>
                ) : (
                    <ul>
                        {carrito.map((producto) => (
                            <li key={producto.id} style={{ marginBottom: "1rem" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <img
                                        style={{
                                            maxHeight: "2cm",
                                            borderRadius: "40px",
                                            marginRight: "1rem",
                                        }}
                                        src={producto.image}
                                        alt={producto.name}
                                    />
                                    <div style={{ flex: 1 }}>
                                        {producto.name} - {"$" + producto.price}
                                    </div>
                                    <div id="manejoCantidad" style={{ display: "flex", alignItems: "center" }}>
                                        <button
                                            id="botonRestarCantidad"
                                            onClick={() => restarCantidad(producto.id)}
                                            className="botonAgregar-Restar"
                                        >
                                            -
                                        </button>

                                        <p style={{ margin: "0 1rem" }}>x{cantidadProductos[producto.id]}</p>

                                        <button
                                            id="botonAgregarCantidad"
                                            onClick={() => sumarCantidad(producto.id)}
                                            className="botonAgregar-Restar"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                <h1 style={{ marginLeft: "80%" }}>Total: ${total}</h1>
                <button
                    id="botonPagar"
                    type="button"
                    className="btn btn-danger"
                    onClick={() => window.open("https://link.mercadopago.com.ar/trlab3", "_blank")}
                >
                    Ir a pagar
                </button>
            </section>
        </>
    );
}

export default Carrito;
