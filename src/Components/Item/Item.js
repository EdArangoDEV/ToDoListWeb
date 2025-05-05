import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../reducers/todoSlice';


function Item(props) {
  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeTodo(props.name));
  }

  const dispatch = useDispatch();
  return (
    <Card >
      <Card.Body>
        <Card.Title >{props.name}</Card.Title>
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
        <Button variant="info" onClick={removeItem}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;