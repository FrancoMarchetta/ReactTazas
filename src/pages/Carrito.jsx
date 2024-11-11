function Carrito({ carrito }) {
    return (
        <>
            <br />
            <br />
            <br />
            <br />

            <section className="carritoSection">
                <h1>Carrito de Compras</h1>
                {carrito.length === 0 ? (
                    <p>No hay productos en el carrito.</p>
                ) : (
                    <ul>
                        {carrito.map((producto, index) => (
                            <li key={index}>
                                {producto.name} (ID: {producto.productId})
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </>
    );
}

export default Carrito;
