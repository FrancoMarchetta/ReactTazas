import Card from "../assets/components/Card"
import { useNavigate } from 'react-router-dom';

function CatalogoTazas() {
    return (
        <>
            <main className="catalogCards">

                <div class="container text-center">
                    <div class="row align-items-center">
                        <div class="col">
                            <Card image="../../public/images/harry potter.png" name="Taza Harry Potter" description="Taza hecha de ceramica con tematica de harry potter"></Card>
                        </div>
                        <div class="col">
                            <Card image="../../public/images/taza-chip.jpeg" name="Taza chip" description="Taza hecha de ceramica con tematica de chip de la bella y la bestia"></Card>
                        </div>
                        <div class="col">
                            <Card image="../../public/images/goty-taza.jpg" name="Taza Grommit" description="Taza hecha de ceramica con tematica de Grommit"></Card>
                        </div>
                    </div>
                </div>

                <div class="container text-center">
                    <div class="row align-items-center">
                        <div class="col">
                            <Card image="../../public/images/taza_wolverine.jpg" name="Taza Wolverine" description="Taza hecha de ceramica con tematica de Wolverine(Xmen)"></Card>
                        </div>
                        <div class="col">
                            <Card image="../../public/images/spiderman.png" name="Taza Spiderman" description="Taza hecha de ceramica con tematica de Spiderman."></Card>
                        </div>
                        <div class="col">
                            <Card image="../../public/images/taza-groot.jpeg" name="Taza Groot" description="Taza hecha de ceramica con tematica de Groot De Guardianes de la Galaxia."></Card>
                        </div>
                    </div>

                </div><div class="container text-center">
                    <div class="row align-items-center">
                        <div class="col">
                            <Card image="../../public/images/taza-mario.jpeg" name="Taza Mario" description="Taza hecha de ceramica con tematica de Mario Bros"></Card>
                        </div>
                        <div class="col">
                            <Card image="../../public/images/taza-dbz.jpg" name="Taza Dragon Ball" description="Taza hecha de ceramica con tematica de Esfera del dragon."></Card>
                        </div>
                        <div class="col">
                            <Card image="../../public/images/stitch.png" name="Taza Stitch" description="Taza hecha de ceramica con tematica de Stitch"></Card>
                        </div>
                    </div>
                </div>

            </main >
        </>
    )
}

export default CatalogoTazas