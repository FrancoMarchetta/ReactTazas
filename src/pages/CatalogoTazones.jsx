import Card from "../assets/components/Card"
import { useNavigate } from 'react-router-dom';

function CatalogoTazones() {
    return (
        <>
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col">
                        <Card image="../../public/images/tazon_rosa.png" name="Taza Harry Potter" description="Taza hecha de ceramica con tematica de harry potter"></Card>
                    </div>
                    <div class="col">
                        <Card image="../../public/images/tazon_sonic.webp" name="titulo" description="descripcion"></Card>
                    </div>
                    <div class="col">
                        <Card image="../../public/images/tazon_monster-inc.jpg" name="titulo" description="descripcion"></Card>
                    </div>
                </div>
            </div>

            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col">
                        <Card image="../../public/images/tazon_mike-w.jpg" name="titulo" description="descripcion"></Card>
                    </div>
                    <div class="col">
                        <Card image="../../public/images/tazon_bart.jpeg" name="titulo" description="descripcion"></Card>
                    </div>
                    <div class="col">
                        <Card image="../../public/images/tazon_meeseeks.jpg" name="titulo" description="descripcion"></Card>
                    </div>
                </div>

            </div><div class="container text-center">
                <div class="row align-items-center">
                    <div class="col">
                        <Card image="../../public/images/tazon_kitty.jpg" name="titulo" description="descripcion"></Card>
                    </div>
                    <div class="col">
                        <Card image="../../public/images/Tazon_grogu.webp" name="titulo" description="descripcion"></Card>
                    </div>
                    <div class="col">
                        <Card image="../../public/images/compadre.webp" name="titulo" description="descripcion"></Card>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CatalogoTazones;