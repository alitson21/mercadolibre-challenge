import { Navbar, Form, FormControl, Dropdown, Container, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="shadow-sm" style={{ backgroundColor: '#fedd22' }}>
      <Container fluid>
        {/* Logo principal - Coloco una imagen desde Internet */}
        <Navbar.Brand href="#">
          <img
            src="https://dl.memuplay.com/new_market/img/com.mercadoenvios.crowdsourcing.icon.2024-12-13-20-01-22.png"
            alt="Logo"
            height="80"
          />
        </Navbar.Brand>

        {/* toggle */}
        <Navbar.Toggle aria-controls="navbar-content" />

        <Navbar.Collapse id="navbar-content" className="justify-content-between">
          {/* Buscador */}
          <Form className="d-flex mx-auto" style={{ maxWidth: '500px', width: '100%' }}>
            <FormControl
              type="search"
              placeholder="Buscar productos..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="secondary" onClick={() => alert('Por ahora buscar no Funciona')}>Buscar</Button>
          </Form>

          {/* Menú desplegable y carrito */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <Dropdown align="end">
              <Dropdown.Toggle variant="secondary" id="dropdown-user">
                Usuario
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Mi cuenta</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Mis compras</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Cerrar sesión</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Button variant="outline-dark" onClick={() => alert('Por ahora ir al  Carrito no Funciona')}>
              <FaShoppingCart />
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
