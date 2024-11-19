import { useState } from "react";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from "axios";

function Carrito({ carrito }) {
    initMercadoPago('APP_USR-5a2cf492-55c2-4abc-8adc-d23f744e516f', { locale: "es-AR" });
    const [preferenceId, setPreferenceId] = useState(null);

    function limpiarCarrito() {
        localStorage.clear();
        window.location.reload();
    }

    const total = carrito.reduce((precioAcumulado, producto) => precioAcumulado + producto.price, 0);

    // Mercado Pago 😔
    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:3000/create_preference", {
                items: carrito.map(producto => ({
                    title: producto.name,
                    quantity: 1,
                    unit_price: producto.price,  // Aquí cambiaste price a unit_price
                })),
            });
            const { id } = response.data;
            return id;
        } catch (error) {
            console.error(error);
        }
    };


    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }
    };

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
                <button onClick={handleBuy} id="botonPagar" type="button" className="btn btn-danger">
                    Ir a pagar
                </button>

                {preferenceId && (
                    <Wallet
                        initialization={{ preferenceId: preferenceId }}
                        customization={{ texts: { valueProp: 'smart_option' } }}
                    />
                )}
            </section>
        </>
    );
}

export default Carrito;
