import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


initMercadoPago('APP_USR-373ea43d-a316-4212-8314-aec0eaae7f0a',{locale: "es-AR"});


function Carrito({ carrito, setCarrito }) {
    const [cantidadProductos, setCantidadProductos] = useState({});
    const [preferenceId, setPreferenceId] = useState(null)
    useEffect(() => {
        // Inicializa el estado cuando cambia el carrito
        if (carrito.length >0){
        const cantidadesIniciales = carrito.reduce(
            (acc, producto) => ({ ...acc, [producto.id]: 1 }),
            {}
        );
        setCantidadProductos(cantidadesIniciales);}
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
            [id]: Math.max(prevState[id] - 1, 1),
        }));
    };

    const eliminarProducto = (id) => {
        const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
        setCarrito(nuevoCarrito);
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
        setCantidadProductos((prevState) => {
          const { [id]: _, ...resto } = prevState; // Elimina el producto del estado
          return resto;
        });
      };



    const total = carrito.reduce(
        (precioAcumulado, producto) =>
            precioAcumulado + producto.price * (cantidadProductos[producto.id] || 1),
        0
    );

    const createPreference = async (carrito) => {
        try {
            const response = await axios.post('http://localhost:3000/create_preference', {
                items: carrito.map((producto) => ({
                    title: producto.name,
                    unit_price: producto.price,
                    quantity: cantidadProductos[producto.id] || 1, // Usa la cantidad del estado
                })),
            });
            const { id } = response.data;
            return id; // Devuelve el ID de la preferencia
        } catch (error) {
            console.error('Error al crear la preferencia:', error);
        }
    };
    
const handleBuy = async () => {
    const id = await createPreference(carrito);
    if (id){
        setPreferenceId(id);
        window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${id}`;
    }
};





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
                                        <button
                      onClick={() => eliminarProducto(producto.id)}
                      style={{
                        marginLeft: "1rem",
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      🗑️
                    </button>



                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                <h1 style={{ marginLeft: "80%" }}>Total: ${total}</h1>


<button onClick={handleBuy}

style={{
    backgroundColor: "#4CAF50", // Color verde
    color: "black", 
    fontSize: "18px",
    padding: "15px 32px", // Espaciado interno
    textAlign: "center", // Centrado del texto
    display: "block", // Asegura que el botón sea un bloque y ocupe todo el ancho disponible
    margin: "0 auto", // Centra el botón horizontalmente
    borderRadius: "12px", // Bordes redondeados
    cursor: "pointer", // Mano al pasar por encima
    border: "2px solid black", 
    transition: "background-color 0.3s, transform 0.3s", // Transición suave
  }}
  onMouseOver={(e) => e.target.style.backgroundColor = "#45a049"} // Cambio de color al pasar el mouse
  onMouseOut={(e) => e.target.style.backgroundColor = "#4CAF50"} // Restaura el color original



>Comprar</button>

                {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />}

            </section>
        </>
    );
}

export default Carrito;
