import logo from './logo.svg';
import './App.scss';
import Item from './Components/Item/Item';
import Menu from './Components/Menu/Menu';
import { Col, Container, Row } from 'react-bootstrap';
import Formulario from './Components/Formulario/Formulario';

function App() {
  return (
    <div className="App app-container">
      <Menu></Menu>
      <Container>
        <Row>
          <Col><Formulario></Formulario></Col>
          <Col>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
