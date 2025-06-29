# Resumen del componente `App.jsx`

## 📄 Archivo: `App.jsx`

### 📌 Propósito

Este componente representa el **componente raíz** de la aplicación React. Su función principal es renderizar el componente `Detalles`.

# Componente `Detalles`

## 📋 Descripción
El componente `Detalles` es una vista principal de una página que se encarga de mostrar la información de productos obtenidos desde una API. Este componente estructura la página utilizando tres secciones:

- `NavbarComponent`: barra de navegación superior.
- `GridSection`: sección donde se visualizan los productos.
- `Footer`: pie de página.

---

## ⚙️ Funcionalidades

- **Estado Local**: utiliza `useState` para guardar los productos en el estado `productos`.
- **Petición a API**: usa `useEffect` para hacer un `fetch` a `http://localhost:3002/api/products` cuando el componente se monta por primera vez.
- **Manejo de errores**: si ocurre un error en la petición, se muestra en consola.
- **Renderizado condicional**: renderiza `GridSection` pasando los productos como props.

---


# Componente `NavbarComponent`

## 📋 Descripción
El componente `NavbarComponent` renderiza una barra de navegación superior utilizando `react-bootstrap`. Está diseñada para simular una cabecera similar a la de MercadoLibre, con logo, buscador, menú de usuario y botón de carrito.

---

## ⚙️ Funcionalidades

- **Logo**: imagen posicionada al inicio de la barra.
- **Buscador**: campo de búsqueda centrado con un botón que lanza una alerta (funcionalidad aún no implementada).
- **Menú de usuario**:
  - Dropdown con opciones como "Mi cuenta", "Mis compras" y "Cerrar sesión".
- **Carrito de compras**:
  - Ícono de carrito que lanza una alerta simulando navegación al carrito.

---

## 🎨 Estilo

- Fondo color amarillo (`#fedd22`) que emula el estilo de MercadoLibre.
- Diseño responsivo con `Navbar.Toggle` y `Navbar.Collapse` para dispositivos móviles.
- Elementos alineados con `d-flex`, `mx-auto` y `gap-3`.
- 🔄 El Dropdown solo se muestra en pantallas grandes (`d-none d-lg-flex`).

---

## 📎 Dependencias

- `react-bootstrap`: para componentes de interfaz (Navbar, Form, Button, etc.).
- `react-icons`: para el ícono de carrito (`FaShoppingCart`).

---

## 📍 Ubicación

Presuntamente ubicado en: `src/component/NavbarComponent.jsx`

---

# Componente `GridSection`

## 📋 Descripción

`GridSection` es un componente que organiza visualmente los detalles de un producto en una cuadrícula de 3 columnas. Muestra imágenes del producto, información detallada y una sección de compra.

---

## ⚙️ Funcionalidades

- **Validación de datos**: si `productos` está vacío o no existe, muestra un spinner (`react-bootstrap/Spinner`) centrado en pantalla como indicador de carga.
- **Diseño responsivo**:
  - Usa `react-bootstrap` para dividir la pantalla en 3 columnas:
    - `SectionsImagenes`: muestra galería/carousel de imágenes.
    - `SectionDetallesProductos`: muestra título, descripción, precio, etc.
    - `SeccionCompra`: botones o acciones relacionadas con la compra.
- **Diseño limpio** con márgenes y separación (`my-5`, `g-4`).

---

## 📎 Dependencias

- `react-bootstrap`: para estructura `Container`, `Row`, `Col` y `Spinner`.
- Componentes hijos: 
  - `SectionsImagenes`
  - `SectionDetallesProductos`
  - `SeccionCompra`

---

## 🧠 Observaciones

- El `productos` se pasa como `props`, y se espera que sea un arreglo con al menos un producto.
- El spinner se activa solo cuando no hay productos cargados.
- Este componente actúa como contenedor principal para presentar la vista detallada de un producto.

---

## 📍 Ubicación

Presuntamente ubicado en: `src/component/GridSection.jsx`

---

# Componente `SectionsImagenes`

## 📋 Descripción

`SectionsImagenes` es un componente que presenta una galería de imágenes del producto usando un carrusel (carousel) y miniaturas clickeables. Está diseñado para mejorar la experiencia visual del usuario en pantallas medianas y grandes.

---

## ⚙️ Funcionalidades

- **Galería dinámica**:
  - Obtiene las imágenes de un producto (`imagenA`, `imagenB`, etc.) desde la prop `productos`.
  - Usa el producto ubicado en la posición `[1]` del array (esto se que no es recomedable pero para uso practico de este proyecto lo arme asi).
- **Miniaturas interactivas**:
  - Muestra imágenes como miniaturas en una columna lateral.
  - Al hacer clic en una miniatura, se actualiza el índice del carrusel principal.
- **Carrusel controlado**:
  - Usa `react-bootstrap/Carousel`.
  - Permite desplazarse automáticamente o mediante clics en miniaturas.
- **Estado interno**:
  - Usa `useState` para mantener la imagen activa en el carrusel.

---

## 🎨 Diseño

- Utiliza `react-bootstrap` con diseño responsivo:
  - Miniaturas se ocultan en pantallas chicas (`d-none d-md-block`).
  - El carrusel ocupa 8 de las 12 columnas (`md=8`) en pantalla mediana o mayor.
- Las imágenes activas se resaltan con un borde azul.

---

## 📎 Dependencias

- `react-bootstrap`: `Container`, `Row`, `Col`, `Image`, `Carousel`.
- Hook `useState` de React.

---

## ⚠️ Consideraciones

- El componente accede directamente a `productos[1]`, lo que puede fallar si `productos` está vacío o no tiene suficientes elementos.
- No incluye validación de datos porque la validacion la agregue en el componente padre.

---

## 📍 Ubicación

Presuntamente ubicado en: `src/component/SectionsImagenes.jsx`

---

# Componente `SectionDetallesProductos`

## 📋 Descripción

`SectionDetallesProductos` es un componente que presenta los detalles informativos de un producto, incluyendo título, descripción, precio, calificación, cantidad de reseñas y stock disponible. Utiliza un diseño basado en tarjetas con Bootstrap para una presentación clara y profesional.

---

## ⚙️ Funcionalidades

- **Visualización del producto**:
  - Muestra los datos de un producto específico usando la posición fija `productos[1]` (definida como `valor = 1`).
- **Campos mostrados**:
  - Título del producto.
  - Descripción dentro de un contenedor resaltado.
  - Precio con formato monetario.
  - Calificación simulada con una `ProgressBar`.
  - Cantidad de reseñas simuladas.
  - Stock disponible.
- **Enlace simulado**:
  - Un botón tipo `link` para acceder a "Métodos de pago" (sin funcionalidad implementada).

---

## 🎨 Diseño

- Usa `react-bootstrap`:
  - `Card`, `Button`, `ProgressBar`, `Container`.
- Estilizado adicional con un archivo CSS externo: `secciondetallesproductos.css`.
- Diseño responsive y con sombras para mejorar la experiencia visual.

---

## 📎 Dependencias

- `react-bootstrap`
- Archivo de estilos CSS personalizado (`../assets/css/secciondetallesproductos.css`).

---

## ⚠️ Consideraciones

- El producto mostrado se obtiene con `productos[1]`, lo cual comento no es recomendado, solo lo realice asi por cumplimiento del proyecto y para pruebas internas.
- Las calificaciones y reseñas son valores **simulados**, no se extraen del objeto `productos`.
- No se manejan estados vacíos o errores de carga de `productos`.

---

## 📍 Ubicación

Presuntamente ubicado en: `src/component/SectionDetallesProductos.jsx`

---

# Componente `SeccionCompra`

## 🛒 Descripción

`SeccionCompra` es un componente que presenta una interfaz de acciones de compra para un producto, incluyendo botones de compra, información sobre la entrega y un recuadro con los datos del vendedor. Está diseñado usando `react-bootstrap` y utiliza íconos para mejorar la experiencia visual.

---

## ⚙️ Funcionalidades

- **Información de entrega**:
  - Muestra dos secciones con detalles sobre envío gratuito y retiro en puntos designados.

- **Botones de acción**:
  - **Comprar**: Botón verde que simula el inicio de una compra (lanza un `alert`).
  - **Agregar al carrito**: Botón azul que simula agregar al carrito (también con `alert`).

- **Información del vendedor**:
  - Tarjeta centrada con el nombre del vendedor (variable `nombre_vendedor`).

---

## 🎨 Diseño y estilo

- Contenido centrado y con separación (`my-4`).
- Usa diseño responsive con `flex-wrap` para manejar diferentes anchos de pantalla.
- Elementos Bootstrap:
  - `Container`, `Button`, `Card`.
- Íconos de `react-icons/fa`:
  - `FaCreditCard` y `FaShoppingCart`.

---

## 📎 Dependencias

- `react-bootstrap`
- `react-icons`


---

## 📍 Ubicación sugerida

Presuntamente ubicado en: `src/component/SeccionCompra.jsx`

---

# Componente `Footer`

## 📝 Descripción

`Footer` es un componente de pie de página simple y estático que proporciona información de branding y créditos del proyecto. Es visualmente coherente con los colores de MercadoLibre y está centrado en pantalla.

---

## ⚙️ Funcionalidades

- **Muestra título**:
  - `"Challenge de MercadoLibre"` en un encabezado `h5`.

- **Información de derechos**:
  - Año actual (dinámico) y el nombre del autor: **Alitson Martinez**.

---

## 🎨 Diseño y estilo

- Usa `react-bootstrap` para la estructura.
- Aplicación de estilos inline:
  - Fondo amarillo (`#fedd22`), coherente con el branding.
  - `text-center`, `py-4`, `mt-5` para espaciado y alineación.

---

## 📎 Dependencias

- `react-bootstrap`

---

## 📍 Ubicación sugerida

Presuntamente ubicado en: `src/component/Footer.jsx`

---
# Archivo CSS – `secciondetallesproductos.css`

## 🎯 Objetivo

Este archivo CSS define una clase llamada `.responsive-title` cuyo propósito es adaptar dinámicamente el tamaño de fuente del título del producto según el ancho de la pantalla, asegurando una buena legibilidad en dispositivos de distintos tamaños.

---

## 📐 Detalle de estilos

### Clase `.responsive-title`

- **Por defecto**:
  - Tamaño de fuente: `2rem` (ideal para pantallas grandes)

### Media Queries

| Breakpoint (máx. ancho) | Tamaño de fuente | Observaciones                     |
|-------------------------|------------------|----------------------------------|
| 992px                   | `1.5rem`         | Dispositivos medianos            |
| 820px                   | `1.2rem`         | Tablets grandes y pequeñas       |
| 768px                   | `1.2rem`         | Redundancia para mayor cobertura |

---

## 📁 Ubicación

Presuntamente ubicado en:  
`src/assets/css/secciondetallesproductos.css`

---

# Guía completa para ejecutar el proyecto `detallemercadolibre`

## Requisitos previos

- Tener instalado Node.js (recomendado v16 o superior).
- Tener acceso a la terminal o consola de comandos.
- Contar con el proyecto descargado o clonado en tu equipo.

---

## Paso 1: Navegar a la carpeta del proyecto

Abre la terminal y dirígete a la carpeta raíz del proyecto (donde está el archivo `package.json`):

```bash
cd /ruta/a/tu/proyecto
```

# Resumen de comandos y pasos para ejecutar el proyecto

## Comandos principales

- `npm install`  
  Instala todas las dependencias necesarias (crea la carpeta `node_modules`).

- `npm run dev`  
  Ejecuta la app en modo desarrollo con Vite (servidor local con recarga automática).

- Abrir en el navegador la URL:  
  [http://localhost:5173](http://localhost:5173)

- `npm run build`  
  Compila la aplicación para producción (optimiza y minimiza archivos) (opcional).

- `npm run preview`  
  Previsualiza el build de producción localmente. (opcional)


---

## Información adicional (según package.json)

- Nombre del proyecto: `detallemercadolibre`
- Versión: `0.0.0`
- Tipo: módulo ES (`"type": "module"`)
- Dependencias:  
  - React 19.1.0, React-DOM 19.1.0  
  - Bootstrap 5.3.7 y React-Bootstrap  
  - React-Icons  
- DevDependencies:  
  - Vite, ESLint y plugins, Tipos para React

---

¡Recuerda que primero debes ejecutar al api (backend)!
