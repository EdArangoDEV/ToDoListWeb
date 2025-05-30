import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../reducers/todoSlice';


function Item(props) {

  const dispatch = useDispatch();

  const removeItem = (e) => {
    e.preventDefault();
    console.log("Removing item: ", props);
    console.log(props.id);
      dispatch(removeTodo(props.id));
    }


  return (
    <Card >
      <Card.Body>
        <Card.Title >{props.name}</Card.Title>
        <Card.Text >
          Description
        </Card.Text>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text >
          Due Date
        </Card.Text>
        <Card.Text>
            {props.dueDate}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        {/* <Button variant="info">Editar</Button> */}
        <Button variant="info" onClick={removeItem}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;