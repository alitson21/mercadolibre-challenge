import { useEffect, useState } from "react";
import NavbarComponent from "../component/NavbarComponent";
import GridSection from "../component/GridSection";
import Footer from "../component/Footer";

const Detalles = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la petición");
        }
        return res.json();
      })
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, []);

  // console.log(productos)

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />
      <main className="flex-grow-1">
        <GridSection productos={productos} />
      </main>
      <Footer />
    </div>
  );
};

export default Detalles;
