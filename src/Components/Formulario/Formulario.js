import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Formulario.scss";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { addTodo } from "../../reducers/todoSlice";
import { addGoal } from "../../reducers/goalsSlice";

function Formulario() {
  const dispatch = useDispatch();
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();
  const option = useSelector((state) => state.option.value);

  const addItem = (e) => {
    e.preventDefault();
    console.log(inputRefName.current.value);
    if (
      inputRefName.current.value &&
      inputRefDescription.current.value &&
      inputRefDueDate.current.value
    ) {
      if (option === "tasks") {
        dispatch(
          addTodo({
            name: inputRefName.current.value,
            description: inputRefDescription.current.value,
            dueDate: inputRefDueDate.current.value,
          })
        );
      } else {
        dispatch(
          addGoal({
            name: inputRefName.current.value,
            description: inputRefDescription.current.value,
            dueDate: inputRefDueDate.current.value,
          })
        );
      }

      // Limpiar los inputs
      inputRefName.current.value = "";
      inputRefDescription.current.value = "";
      inputRefDueDate.current.value = "";
    }
  };

  return (
    <div className="space">
      <Form className="custom-form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="" ref={inputRefName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} ref={inputRefDescription} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" ref={inputRefDueDate} />
        </Form.Group>
        {option === "tasks" && (
          <Button variant="info" onClick={addItem}>
            Add Tasks
          </Button>
        )}
        {option === "goals" && (
          <Button variant="info" onClick={addItem}>
            Add Goal
          </Button>
        )}
      </Form>
    </div>
  );
}

export default Formulario;
