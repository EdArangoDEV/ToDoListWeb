import logo from "./logo.svg";
import "./App.scss";
import Item from "./Components/Item/Item";
import Menu from "./Components/Menu/Menu";
import { Col, Container, Row } from "react-bootstrap";
import Formulario from "./Components/Formulario/Formulario";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, initAddTodo } from "./reducers/todoSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.value);

  const arr = [
    {
      name: "camiar al perro 1",
    },
    {
      name: "camiar al perro 2",
    }
  ];

  useEffect(() => {
    arr.map((item) => {
      dispatch(initAddTodo(item));
    });
  }, []);

  return (
    <div className="App app-container">
      <Menu></Menu>
      <Container>
        <Row>
          <Col>
            <Formulario></Formulario>
          </Col>
          <Col>
            <Row>
              <div className="scrolling">
                {todos.map((todo, index) => {
                  return <Item key={index} name={todo.name} />;
                })}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
