
import React, { useState } from "react";
import Card from "../assets/components/Card";
import "../assets/css/styles.css";

function CatalogoTazones({ agregarAlCarrito }) {
    const [search, setSearch] = useState("");

    const tazones = [
        { id: 10, image: "../../public/images/tazon_rosa.png", name: "Taza Sonrisa Rosa", description: "Taza hecha de cerámica con temática de dibujitos", price: 132 },
        { id: 11, image: "../../public/images/tazon_sonic.webp", name: "Taza Sonic", description: "Taza hecha de cerámica con temática de dibujitos", price: 123 },
        { id: 12, image: "../../public/images/tazon_monster-inc.jpg", name: "Taza Monsters INC", description: "Taza hecha de cerámica con temática de Monsters INC", price: 421 },
        { id: 13, image: "../../public/images/tazon_mike-w.jpg", name: "Taza Mike Wazowski", description: "Taza hecha de cerámica con temática de Mike Wazowski", price: 121 },
        { id: 14, image: "../../public/images/tazon_bart.jpeg", name: "Taza Bart Simpson", description: "Taza hecha de cerámica con temática de Los Simpsons.", price: 143 },
        { id: 15, image: "../../public/images/tazon_meeseeks.jpg", name: "Taza Meeseeks", description: "Taza hecha de cerámica con temática de Rick and Morty", price: 661 },
        { id: 16, image: "../../public/images/tazon_kitty.jpg", name: "Taza Kitty", description: "Taza hecha de cerámica con temática de Kitty", price: 355 },
        { id: 17, image: "../../public/images/Tazon_grogu.webp", name: "Taza Grogu", description: "Taza hecha de cerámica con temática de Mandalorian", price: 231 },
        { id: 18, image: "../../public/images/compadre.webp", name: "Taza Calavera", description: "Taza re fachera", price: 198 }
    ];

    const filteredTazones = tazones.filter(tazon =>
        tazon.name.toLowerCase().includes(search.toLowerCase()) ||
        tazon.description.toLowerCase().includes(search.toLowerCase())
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
                    placeholder="Buscar tazones..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-bar" 
                />
            </div>

            <main className="catalogCards">
                <div className="container text-center">
                    <div className="row align-items-center">
                        {filteredTazones.length > 0 ? (
                            filteredTazones.map((tazon) => (
                                <div className="col" key={tazon.id}>
                                    <Card
                                        agregarAlCarrito={agregarAlCarrito}
                                        id={tazon.id}
                                        image={tazon.image}
                                        name={tazon.name}
                                        description={tazon.description}
                                        price={tazon.price}
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

export default CatalogoTazones;
