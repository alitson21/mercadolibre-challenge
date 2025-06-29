// En esta seccion realizo la importacion de modulos que necesite para el proyecto
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import cors from 'cors';

// importe meta.url y con la funcion fileURLtoPath convierto esa url en una ruta de archivo
const __filename = fileURLToPath(import.meta.url); 
// con path.dirname extraigo el directorio donde esta el archivo json en data y la guardo en dirname 
const __dirname = path.dirname(__filename); 

const app = express(); //creo una instancia de una aplicacion express
const PORT = process.env.PORT || 3002; // defino la constante PORT pasandole los valores ya sea por el archivo .env o un puerto por defecto

app.use(cors()); //habilito los cors 
app.use(express.json()); //activo un midelware que le permite a mi aplicaciones recibir por el body de la peticion json

const PRODUCTS_FILE = path.join(__dirname, 'data', 'products.json'); //defino la ruta absoluta al archivo local

// creo una funcion asincrona que carga la lista de producto desde la ruta absoluta y le puse un try catch para capturar errores en caso de que no se pueda leer el archivo 
async function loadProducts() {
  try {
    const data = await fs.readFile(PRODUCTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    throw new Error('Error al leer el arrchivo');
  }
}

// cree un metodo GET para listar todos los productos este metodo es asincrono y espera por una promesa de la funcion loadProducts, inclui tambien validaciond e errores
app.get('/api/products', async (req, res) => {
  try {
    const products = await loadProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// middleware para manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// middleware para manejo de errores globales
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// inicio del servidor y su puerto de escucha e imprimi por consola la url
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
