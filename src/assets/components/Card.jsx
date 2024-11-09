function Card({ image, name, description }) {



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
                    <a href="#" className="btn btn-danger">Agregar al Carrito</a>
                </div>
            </div>
        </>
    )
}
export default Card;