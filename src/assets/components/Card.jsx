function Card({ image, name, description, productId, agregarAlCarrito }) {
    const handleAgregarCarrito = () => {
        agregarAlCarrito(productId, name, image);
    };


    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <button onClick={handleAgregarCarrito} className="btn btn-danger">Agregar al Carrito</button>
                <h6>ID = {productId}</h6>
            </div>
        </div>
    );
}

export default Card;
