import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';

function Item() {
  return (
    <Card >
      <Card.Body>
        <Card.Title >Title</Card.Title>
        <Card.Text >
          Description
        </Card.Text>
        <Card.Text>
          Elaborar una aplicación web responsive en la que se pueda llevar el control de mis tareas y metas personales.
        </Card.Text>
        <Card.Text >
          Due Date
        </Card.Text>
        <Card.Text>
            31/05/2024
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="info">Editar</Button>
        <Button variant="info">Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;