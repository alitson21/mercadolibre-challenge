import { Card, Button, ProgressBar, Container } from 'react-bootstrap';
import '../assets/css/secciondetallesproductos.css';

const product = {
  rating: 95, // Valor simulado para la barra de calificación (de 0 a 100)
  reviews: 12 // Número simulado de reseñas
};

const SectionDetallesProductos = ({productos}) => {
  // console.log(productos);
  const valor = 1; // Esto lo hago para fines del proyecto, no es recomendable

  return (
    <Container className="my-4" style={{ minHeight: '15cm', borderLeft: 'solid 1px' }}>
      <Card className="shadow">
        <Card.Body>
          {/* Título */}
          <Card.Title className="mb-3 responsive-title">{productos[valor].title}</Card.Title>

          {/* Descripción */}
          <Card.Text className="mb-3">
            <strong>Descripción:</strong>
            <p className="border p-2 mt-1 rounded bg-light">
              {productos[valor].description}
            </p>
          </Card.Text>

          {/* Precio */}
          <Card.Text className="fs-4 text-success mb-2">
            ${productos[valor].price.toFixed(2)}
          </Card.Text>

          {/* Link o métodos de pago */}
          <Card.Text>
            <Button variant="link" className="p-0">Métodos de pago</Button>
          </Card.Text>

          {/* Barra de calificaciones */}
          <Card.Text className="mb-2">
            <strong>Calificación:</strong>
            <ProgressBar now={product.rating} label={`${product.rating}%`} />
          </Card.Text>

          {/* Reseñas */}
          <Card.Text>
            <strong>Reseñas:</strong> {product.reviews} opiniones
          </Card.Text>

          {/* Stock */}
          <Card.Text className="text-muted">
            <strong>Stock:</strong> {productos[valor].stock} unidades disponibles
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SectionDetallesProductos;
