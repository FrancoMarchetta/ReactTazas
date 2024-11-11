import Card, { AgregarCarrito } from "../assets/components/Card";
function Carrito(carrito) {


    console.log(carrito);
    let carro = AgregarCarrito();



    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />

            <section className="carritoSection">

                <h1>{carro} </h1>

            </section>
        </>
    )
}

export default Carrito;

