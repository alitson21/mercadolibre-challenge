Objetivo : se me solicito una api rest full para productos.

Se creo un proyecto en nodejs con el franwork de express js 
de tipo module para apobechar todas las ventajas de ECMAScript.

Tiene un archivo principal en la raiz del proyecto que contiene la logica
y configuracion de la api en javascript (index.js).

Tiene un archivo .environment para configuracion de puerto y datos locales (.env).
Tiene un achivo llamado packge.json donde se define la configuracion basica del proyecto.
Tiene un archivo packge-lock.json donde se almacenan los registros de paquetes y sus versiones instaladas.
Tiene una carpeta data dode eh dejado el json de datos de procutos.
Por ultimo esta la carpeta node_module que se genera al instalar las dependecia del proyecto.

En el archivo index.js deje linea por linea la explicacion del codigo
En el archivo productos no puedo dejar comentarios, basicamente por que debe manejar la estructura de un archivo json donde cargue el listado de prodcutos mock o mockeados.

Para correr esta api debes ejecutar los comandos:
npm install   --> si adjunto la carpeta node_module no hace falta
luego tendras que ejecutar por consola :
node index.js  --> desde la raiz del proyecto

Desde un postmant o con un curl pueden probar la api utilizando la url y el path del metodo creado:

GET http://localhost:3002/api/products
curl --location 'http://localhost:3002/api/products'

Dejo la estructura del proyecto con un tree (arbol del proyecto)

API_REST_PRODUCTOS/
├── data/
│   └── products.json
├── index.js
├── .env
├── package.json
├── package-lock.json
└── node_modules/

nota: debes tener instalado nodejs.