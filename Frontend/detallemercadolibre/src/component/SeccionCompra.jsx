import { Container, Button, Card } from 'react-bootstrap';
import { FaShoppingCart, FaCreditCard } from 'react-icons/fa';

const SeccionCompra = () => {
  const nombre_vendedor = "ChalengeMercadolibreAlitson"

  return (
    <Container className="my-4 text-center" style={{ minHeight: '15cm', borderLeft: 'solid 1px' }}>
      <div className="mb-4">
        <div className="d-flex flex-wrap justify-content-between">
          <p className="flex-grow-1 me-3 text-justify">
            <span style={{ fontWeight: 'bold' }}>Llega gratis</span> entre el jueves y el martes 8/jul
          </p>
          <p className="flex-grow-1 text-justify">
            <span style={{ fontWeight: 'bold' }}>Retira gratis</span> entre el jueves y el martes 8/jul en correo y otros puntos
          </p>
        </div>
      </div>

      {/* Botones */}
      <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
        <Button variant="success" size="lg" onClick={() => alert('Por ahora el comprar no Funciona')}>
          <FaCreditCard className="me-2" />
          Comprar
        </Button>
        <Button variant="primary" size="lg" onClick={() => alert('Por ahora el Agregar al Carrito no Funciona')}>
          <FaShoppingCart className="me-2" />
          Agregar al carrito
        </Button>
      </div>

      {/* Card del vendedor*/}
      <Card className="w-100 mx-auto" style={{ maxWidth: '400px' }}>
        <Card.Body>
          <Card.Title className="fs-5">Información del vendedor</Card.Title>
          <Card.Text className="text-muted">{nombre_vendedor}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SeccionCompra;
