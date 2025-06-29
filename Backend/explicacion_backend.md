# API RESTful de Productos

## 🏁 Objetivo

Se solicitó una API RESTful para la gestión de productos.

## ⚙️ Tecnologías

El proyecto fue desarrollado en **Node.js** utilizando el framework **Express.js**.  
Está configurado como un módulo (`"type": "module"`) para aprovechar todas las ventajas de ECMAScript moderno.

## 📁 Estructura del Proyecto

- `index.js`: Archivo principal con la lógica y configuración de la API.
- `.env`: Variables de entorno (como el puerto del servidor).
- `package.json`: Configuración del proyecto, dependencias y scripts.
- `package-lock.json`: Registro exacto de las versiones de los paquetes instalados.
- `data/products.json`: Contiene una lista mock de productos.
- `node_modules/`: Se genera automáticamente con las dependencias instaladas (no se sube al repositorio).

```text
API_REST_PRODUCTOS/
├── data/
│   └── products.json
├── index.js
├── .env
├── package.json
├── package-lock.json
└── node_modules/
```text

## Cómo ejecutar la API

Paso 1: Instalar dependencias

npm install

Paso 2: Iniciar el servidor

node index.js

Paso 3: Acceder a la API

http://localhost:3002

Paso 4: Probar el endpoint de productos

curl --location 'http://localhost:3002/api/products'
