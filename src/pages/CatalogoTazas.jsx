import Card from "../assets/components/Card"
import { useNavigate } from 'react-router-dom';

function CatalogoTazas() {
    return (
        <>
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col">
                        <Card image="../../public/images/harry potter.png" name="Taza Harry Potter" description="Taza hecha de ceramica con tematica de harry potter"></Card>
                    </div>
                    <div class="col">
                        <Card image="../../public/images/taza-chip.jpeg" name="titulo" description="descripcion"></Card>
                    </div>
                    <div class="col">
                        <Card image="../../public/images/goty-taza.jpg" name="titulo" description="descripcion"></Card>
                    </div>
                </div>
            </div>

            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col">
                        <Card image="../../public/images/taza_wolverine.jpg" name="titulo" description="descripcion"></Card>
                    </div>
                    <div class="col">
                        <Card image="../../public/images/spiderman.png" name="titulo" description="descripcion"></Card>
                    </div>
                    <div class="col">
                        <Card image="../../public/images/taza-groot.jpeg" name="titulo" description="descripcion"></Card>
                    </div>
                </div>

            </div><div class="container text-center">
                <div class="row align-items-center">
                    <div class="col">
                        <Card image="../../public/images/taza-mario.jpeg" name="titulo" description="descripcion"></Card>
                    </div>
                    <div class="col">
                        <Card image="../../public/images/taza-dbz.jpg" name="titulo" description="descripcion"></Card>
                    </div>
                    <div class="col">
                        <Card image="../../public/images/stitch.png" name="titulo" description="descripcion"></Card>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CatalogoTazas