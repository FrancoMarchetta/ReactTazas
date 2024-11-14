import { useState } from "react";
function Carrito({ carrito }) {

    function limpiarCarrito() {
        localStorage.clear();
        window.location.reload()
    }

    const total = carrito.reduce((precioAcumulado, producto) => precioAcumulado + producto.price, 0);




    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />



            <section className="carritoSection">
                <div style={{ marginLeft: "30%", display: "flex" }}>
                    <h1>🛒Carrito de Compras</h1>
                    <button id="botonVaciarCarrito" onClick={limpiarCarrito} >Vaciar Carrito🗑️</button>
                </div>


                {carrito.length === 0 ? (
                    <p>No hay productos en el carrito.</p>
                ) : (
                    <ul>
                        {carrito.map((producto, index) => (
                            <li key={index}>
                                <img style={{ maxHeight: "2cm", borderRadius: "40px" }} src={producto.image} alt="" /> {producto.name} {/*(ID: {producto.productId} )*/}  ||{"$" + producto.price}||
                            </li>
                        ))}
                    </ul>
                )}


                <h1 style={{ marginLeft: "85%" }} >total: ${total}</h1>
                <button style={{ marginLeft: "88%", width: "7%" }} type="button" class="btn btn-danger">Ir a pagar</button>


            </section >

        </>
    );
}

export default Carrito;
