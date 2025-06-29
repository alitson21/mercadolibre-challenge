import { useState } from "react";
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';

//  const imagesList = [
//    'https://imgs.search.brave.com/DrUGnKDj3ZUB0Sod_sfJvHj_PS1EVg4-hcWJlTX5dWY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA1/NjM5MDY1Ni9lcy9m/b3RvL2NhcnRlcmEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWhvWC1mbzFwVGNQ/Vzhoc21CVW55NHpD/a1pyQ3lpaVgwZTZX/bjhiWF91aEU9',
//    'https://imgs.search.brave.com/SCqZW1-RVwaRA-DU4um4L3XsEiC1FXt5bhaLdwKglfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTA2/OTYzMzgvZXMvZm90/by9ib2xzby1jb24t/ZGluZXJvLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1yb2ZN/TUpUUHhSUTE4MmU1/SkgyN0RXdk1TZE1s/cTE3dDVMVVQweWxr/ajVNPQ',   
//     'https://imgs.search.brave.com/fHUuAWnlTuc3cCN9LpC5ysMVwhCpwkPYdXDyqUup2qk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hci50/b2RvbW9kYS5jb20v/bWVkaWEvY2F0YWxv/Zy9wcm9kdWN0Lzgv/Mi84MjI5NjgwMV8w/XzFfMjAyNTAzMjEw/OTAyNTcuanBnP3F1/YWxpdHk9NzUmYmct/Y29sb3I9MjU1LDI1/NSwyNTUmZml0PWJv/dW5kcyZoZWlnaHQ9/NjA4JndpZHRoPTQ3/NSZjYW52YXM9NDc1/OjYwOA',
//    'https://imgs.search.brave.com/PHdNslNbdEJK_Oo8zgyx2IFrNfahgdZKhJ2uCam4ydY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgw/NzU2Mjk0L2VzL2Zv/dG8vYmlsbGV0ZXJh/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz11SUdqa05Kc3I1/dmE2b3ZSeXVDLXBm/WmN5a1o2TzdnUjA0/NUJ0Y0JkM21nPQ',
//  ];

const SectionsImagenes = ({productos}) => {
    const producto = productos[1];
    const imagenes = [
    producto.imagenA,
    producto.imagenB,
    producto.imagenC,
    producto.imagenD
    ]

  const [index, setIndex] = useState(0);
  
  // funcion para cambiar el stado desde el carrousel
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // console.log(producto);

  return (
    <Container className="my-5">
      <Row>
        {/* Lista de imágenes */}
        <Col xs={12} md={4} className="d-none d-md-block">
          {imagenes.map((img, idx) => (
            <div key={idx} className="mb-3">
              <Image
                src={img}
                alt={`Miniatura ${idx + 1}`}
                fluid
                rounded
                style={{ cursor: 'pointer', border: idx === index ? '2px solid #007bff' : 'none' }}
                onClick={() => handleSelect(idx)}
              />
            </div>
          ))}
        </Col>

        {/* Carrusel */}
        <Col xs={12} md={8}>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={6000}>
            {imagenes.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img className="d-block w-100" src={img} alt={`Imagen ${idx + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionsImagenes;
