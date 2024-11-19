import express from "express";
import cors from "cors";

// SDK de Mercado Pago
import { MercadoPagoConfig } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'APP_USR-788803978963978-111815-6999e6109aa070715b85fa41136b051d-2103352665' });


const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:5173',  // Permite solicitudes solo desde este origen
}));
app.use(express.json());

// Ruta básica para verificar si el servidor funciona
app.get("/", (req, res) => {
    res.send("Servidor de Mercado Pago funcionando correctamente.");
});

// Ruta para crear una preferencia
app.post("/create_preference", async (req, res) => {
    try {
        // Crear la preferencia en Mercado Pago
        const preference = {
            items: req.body.items,  // Usar los items tal como llegan del frontend
            back_urls: {
                success: "https://www.youtube.com/watch?v=VJ8FQSh-H4U",
                failure: "https://www.youtube.com/watch?v=b3FJgIZVW4g",
                pending: "https://www.youtube.com/watch?v=RMdWWagAAZI",
            },
            auto_return: "approved",
        };

        // Crear preferencia usando Mercado Pago
        const result = await client.preferences.create(preference);

        // Enviar ID de preferencia como respuesta
        res.json({
            id: result.body.id,
        });
    } catch (error) {
        console.error("Error al crear la preferencia:", error);
        res.status(500).json({
            error: "Error al crear la preferencia.",
        });
    }
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});
