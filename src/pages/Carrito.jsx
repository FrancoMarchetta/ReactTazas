import { useState, useEffect } from "react";
import "../assets/css/styles.css";

function Carrito({ carrito }) {
    const [cantidadProductos, setCantidadProductos] = useState({});

    useEffect(() => {
        const cantidadesIniciales = carrito.reduce(
            (acc, producto) => ({ ...acc, [producto.id]: 1 }),
            {}
        );
        setCantidadProductos(cantidadesIniciales);
    }, [carrito]);

    const limpiarCarrito = () => {
        localStorage.clear();
        window.location.reload();
    };

    const manejarCantidadInput = (id, nuevaCantidad) => {
        const cantidad = Math.max(parseInt(nuevaCantidad) || 0, 0);
        setCantidadProductos((prevState) => ({
            ...prevState,
            [id]: cantidad,
        }));
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
            
            <header className="header">
                <img
                    src="https://via.placeholder.com/50" 
                    alt="Logo"
                    className="header-logo"
                />
                <h1 className="header-title">[Cuphead]</h1>
                <nav className="header-nav">
                    <a href="/" className="nav-link">Home 🏠</a>
                    <a href="/nosotros" className="nav-link">Nosotros</a>
                    <a href="/tazas" className="nav-link">Tazas</a>
                    <a href="/tazones" className="nav-link">Tazones</a>
                    <a href="/carrito" className="nav-link">Carrito 🛒</a>
                </nav>
            </header>

            {/* Contenido del carrito */}
            <section className="carrito-section">
                <div className="carrito-header">
                    <h1>🛒 Carrito de Compras</h1>
                    <button
                        id="botonVaciarCarrito"
                        className="boton-vaciar"
                        onClick={limpiarCarrito}
                    >
                        Vaciar Carrito 🗑️
                    </button>
                </div>

                {carrito.length === 0 ? (
                    <p className="carrito-vacio">
                        No hay productos en el carrito.
                    </p>
                ) : (
                    <ul className="carrito-lista">
                        {carrito.map((producto) => (
                            <li key={producto.id} className="carrito-item">
                                <img
                                    src={producto.image}
                                    alt={producto.name}
                                    className="carrito-imagen"
                                />
                                <div className="carrito-detalle">
                                    <h3>{producto.name}</h3>
                                    <p>Precio: ${producto.price}</p>
                                </div>
                                <div className="carrito-controles">
                                    <button
                                        onClick={() => restarCantidad(producto.id)}
                                        className="boton-cantidad"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={cantidadProductos[producto.id]}
                                        min="0"
                                        className="input-cantidad"
                                        onChange={(e) =>
                                            manejarCantidadInput(producto.id, e.target.value)
                                        }
                                    />
                                    <button
                                        onClick={() => sumarCantidad(producto.id)}
                                        className="boton-cantidad"
                                    >
                                        +
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {carrito.length > 0 && (
                    <div className="carrito-total">
                        <h2>Total: ${total}</h2>
                        <button
                            id="botonPagar"
                            type="button"
                            className="boton-pagar"
                            onClick={() => window.open("https://link.mercadopago.com.ar/trlab3", "_blank")}
                        >
                            Ir a pagar
                        </button>
                    </div>
                )}
            </section>
        </>
    );
}

export default Carrito;
