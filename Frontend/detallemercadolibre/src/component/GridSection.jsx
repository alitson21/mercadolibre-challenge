import { Container, Row, Col } from 'react-bootstrap';
import SectionsImagenes from './SectionsImagenes';
import SectionDetallesProductos from './SectionDetallesProductos';
import SeccionCompra from './SeccionCompra';
import Spinner from 'react-bootstrap/Spinner';

const GridSection = ({productos}) => {
  // console.log(productos);

  if (!productos || productos.length === 0) {
    return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Spinner animation="border" role="status" variant="warning">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
  );
  }
  
  return (
    <Container className="my-5">
      <Row className="g-4">
        <Col xs={12} md={4}>
          <SectionsImagenes productos={productos} />
        </Col>

        <Col xs={12} md={4}>
          <SectionDetallesProductos productos={productos} />
        </Col>

        <Col xs={12} md={4}>
          <SeccionCompra/>
        </Col>
      </Row>
    </Container>
  );
};

export default GridSection;
