import express from "express";
import cors from "cors";

//SDK DE MERCADO PAGO

import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
accessToken: "APP_USR-1067546499353959-120820-bedb452a6188c2222e6820bd3fc2936d-2143906193",


});

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Servidor Funcionando :) ");
}
);

app.post("/create_preference", async (req, res)=> {

    try{
        console.log("Cuerpo de la solicitud:", req.body); // Agrego este log para comprobar
        
        const items = req.body.items.map(producto => ({
            title: producto.title,
            quantity: producto.quantity,
            unit_price: producto.unit_price,
            currency_id: "ARS",
        }));
        
        const body = {
            items: items,

            back_urls: {
                success: "https://www.youtube.com/watch?v=wzSTNQbY6zs",
                failure: "https://www.freepik.es/vector-premium/cara-emoji-triste-pensativa-o-emoticon-decepcionado-3d_12628745.htm",
                pending: "https://www.freepik.es/vector-gratis/dibujado-mano-ilustracion-celebracion-dia-mundial-emoji_26978254.htm#fromView=keyword&page=1&position=0&uuid=5d13ca44-2749-4e17-8214-8ff3b1b695d4",
            },
            auto_return: "approved",
        };

const preference = new Preference(client);
const result = await preference.create({body});
res.json({
    id: result.id,
});





    }catch (error){
        console.log(error);
        res.status(500).json({
            error: "error al crear la preferencia",
        });
    }
});

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});