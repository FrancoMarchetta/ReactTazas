import React, { useState } from "react";
import Card from "../assets/components/Card";
import "../assets/css/styles.css";


function CatalogoTazas({ agregarAlCarrito }) {
    const [search, setSearch] = useState("");

    const tazas = [
        { id: 1, image: "../../public/images/harry potter.png", name: "Taza Harry Potter", description: "Taza hecha de ceramica con tematica de Harry Potter", price: 150 },
        { id: 2, image: "../../public/images/taza-chip.jpeg", name: "Taza Chip", description: "Taza hecha de ceramica con tematica de Chip de La Bella y la Bestia", price: 120 },
        { id: 3, image: "../../public/images/goty-taza.jpg", name: "Taza Grommit", description: "Taza hecha de ceramica con tematica de Grommit", price: 100 },
        { id: 4, image: "../../public/images/taza_wolverine.jpg", name: "Taza Wolverine", description: "Taza hecha de ceramica con tematica de Wolverine (X-Men)", price: 310 },
        { id: 5, image: "../../public/images/spiderman.png", name: "Taza Spiderman", description: "Taza hecha de ceramica con tematica de Spiderman", price: 122 },
        { id: 6, image: "../../public/images/taza-groot.jpeg", name: "Taza Groot", description: "Taza hecha de ceramica con tematica de Groot de Guardianes de la Galaxia", price: 142 },
        { id: 7, image: "../../public/images/taza-mario.jpeg", name: "Taza Mario", description: "Taza hecha de ceramica con tematica de Mario Bros", price: 165 },
        { id: 8, image: "../../public/images/taza-dbz.jpg", name: "Taza Dragon Ball", description: "Taza hecha de ceramica con tematica de Esfera del Dragón", price: 231 },
        { id: 9, image: "../../public/images/stitch.png", name: "Taza Stitch", description: "Taza hecha de ceramica con tematica de Stitch", price: 111 }
    ];

    const filteredTazas = tazas.filter(taza =>
        taza.name.toLowerCase().includes(search.toLowerCase()) ||
        taza.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <br />
            <br />
            <br />
            <br />

            <div className="container text-center">
                <input
                    type="text"
                    placeholder="Buscar tazas..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-bar" 
                />
            </div>

            <main className="catalogCards">
                <div className="container text-center">
                    <div className="row align-items-center">
                        {filteredTazas.length > 0 ? (
                            filteredTazas.map((taza) => (
                                <div className="col" key={taza.id}>
                                    <Card
                                        agregarAlCarrito={agregarAlCarrito}
                                        id={taza.id}
                                        image={taza.image}
                                        name={taza.name}
                                        description={taza.description}
                                        price={taza.price}
                                    />
                                </div>
                            ))
                        ) : (
                            <p>No se encontraron resultados para tu búsqueda.</p>
                        )}
                    </div>
                </div>
            </main>
            <br />
            <br />
            <br />
        </>
    );
}

export default CatalogoTazas;
