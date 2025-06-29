import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-4 mt-5" style={{ backgroundColor: '#fedd22' }}>
      <Container className="text-center">
        <h5 className="mb-2">Challenge de MercadoLibre</h5>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} | Creado por: <strong>Alitson Martinez</strong>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
