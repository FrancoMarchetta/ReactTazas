import Carrito from "../../pages/Carrito";

function Card({ image, name, description, productId }) {
    function HandleAgregarCarrito() {
        AgregarCarrito(productId, name);
    }

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {name} </h5>
                    <p className="card-text"> {description} </p>
                    <button onClick={HandleAgregarCarrito} className="btn btn-danger">Agregar al Carrito</button>
                    <h6>ID = {productId}</h6>
                </div>
            </div>
        </>
    )
}


export default Card;



let carrito = [];

export function AgregarCarrito(productId, name) {
    carrito.push(productId + " " + name)
    console.log(carrito);
    return carrito;
}