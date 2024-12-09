import { useState, useEffect } from "react";
import axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import "../assets/css/styles.css";

initMercadoPago("APP_USR-373ea43d-a316-4212-8314-aec0eaae7f0a", { locale: "es-AR" });

function Carrito({ carrito, setCarrito }) {
    const [cantidadProductos, setCantidadProductos] = useState({});
    const [preferenceId, setPreferenceId] = useState(null);

    useEffect(() => {
        if (carrito.length > 0) {
            const cantidadesIniciales = carrito.reduce(
                (acc, producto) => ({ ...acc, [producto.id]: 1 }),
                {}
            );
            setCantidadProductos(cantidadesIniciales);
        }
    }, [carrito]);

    const limpiarCarrito = () => {
        localStorage.clear();
        setCarrito([]);
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
            [id]: (prevState[id] || 1) + 1,
        }));
    };

    const restarCantidad = (id) => {
        setCantidadProductos((prevState) => ({
            ...prevState,
            [id]: Math.max((prevState[id] || 1) - 1, 1),
        }));
    };

    const eliminarProducto = (id) => {
        const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
        setCarrito(nuevoCarrito);
        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
        setCantidadProductos((prevState) => {
            const { [id]: _, ...resto } = prevState;
            return resto;
        });
    };

    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:3000/create_preference", {
                items: carrito.map((producto) => ({
                    title: producto.name,
                    unit_price: producto.price,
                    quantity: cantidadProductos[producto.id] || 1,
                })),
            });
            const { id } = response.data;
            setPreferenceId(id);
        } catch (error) {
            console.error("Error al crear la preferencia:", error);
        }
    };

    const total = carrito.reduce(
        (precioAcumulado, producto) =>
            precioAcumulado + producto.price * (cantidadProductos[producto.id] || 1),
        0
    );

    return (
        <>
            <header className="header">
                <img src="https://via.placeholder.com/50" alt="Logo" className="header-logo" />
                <h1 className="header-title">[Cuphead]</h1>
                <nav className="header-nav">
                    <a href="/" className="nav-link">Home 🏠</a>
                    <a href="/nosotros" className="nav-link">Nosotros</a>
                    <a href="/tazas" className="nav-link">Tazas</a>
                    <a href="/tazones" className="nav-link">Tazones</a>
                    <a href="/carrito" className="nav-link">Carrito 🛒</a>
                </nav>
            </header>

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
                    <p className="carrito-vacio">No hay productos en el carrito.</p>
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
                                    <button onClick={() => restarCantidad(producto.id)}>-</button>
                                    <input
                                        type="number"
                                        value={cantidadProductos[producto.id]}
                                        onChange={(e) =>
                                            manejarCantidadInput(producto.id, e.target.value)
                                        }
                                    />
                                    <button onClick={() => sumarCantidad(producto.id)}>+</button>
                                    <button onClick={() => eliminarProducto(producto.id)}>🗑️</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                <h2>Total: ${total}</h2>

                <button onClick={createPreference}>Comprar</button>

                {preferenceId && <Wallet initialization={{ preferenceId }} />}
            </section>
        </>
    );
}

export default Carrito;
