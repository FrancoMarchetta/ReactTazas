import Card from "../assets/components/Card"
import { useNavigate } from 'react-router-dom';

function CatalogoTazones() {
    return (
        <>
            <main className="catalogCards">

                <div class="container text-center">
                    <div class="row align-items-center">
                        <div class="col">
                            <Card image="../../public/images/tazon_rosa.png" name="Taza Sonrisa Rosa" description="Taza hecha de cerámica con temática de dibujitos"></Card>
                        </div>
                        <div class="col">
                            <Card image="../../public/images/tazon_sonic.webp" name="Taza Sonic" description="Taza hecha de cerámica con temática de dibujitos"></Card>
                        </div>
                        <div class="col">
                            <Card image="../../public/images/tazon_monster-inc.jpg" name="Taza Monsters INC" description="Taza hecha de cerámica con temática de Monsters INC"></Card>
                        </div>
                    </div>
                </div>

                <div class="container text-center">
                    <div class="row align-items-center">
                        <div class="col">
                            <Card image="../../public/images/tazon_mike-w.jpg" name="Taza Mike Wazowski" description="Taza hecha de cerámica con temática de Mike Wazowski"></Card>
                        </div>
                        <div class="col">
                            <Card image="../../public/images/tazon_bart.jpeg" name="Taza Bart Simpson" description="Taza hecha de cerámica con temática de Los Simpsons."></Card>
                        </div>
                        <div class="col">
                            <Card image="../../public/images/tazon_meeseeks.jpg" name="Taza Meeseeks" description="Taza hecha de cerámica con tematica de Rick and Morty"></Card>
                        </div>
                    </div>

                </div><div class="container text-center">
                    <div class="row align-items-center">
                        <div class="col">
                            <Card image="../../public/images/tazon_kitty.jpg" name="Taza Kitty" description="Taza hecha de cerámica con temática de Kitty"></Card>
                        </div>
                        <div class="col">
                            <Card image="../../public/images/Tazon_grogu.webp" name="Taza Grogu" description="Taza hecha de cerámica con temática de Mandalorian"></Card>
                        </div>
                        <div class="col">
                            <Card image="../../public/images/compadre.webp" name="Taza Calavera" description="Taza re fachera"></Card>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default CatalogoTazones;