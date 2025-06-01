import logo from "./logo.svg";
import "./App.scss";
import Item from "./Components/Item/Item";
import Menu from "./Components/Menu/Menu";
import { Col, Container, Row } from "react-bootstrap";
import Formulario from "./Components/Formulario/Formulario";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setTodos } from "./reducers/todoSlice";
import { setGoals } from "./reducers/goalsSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.tasks.value);
  const goals = useSelector((state) => state.goals.value);
  const option = useSelector((state) => state.option.value);

  
  async function initFetch(endpoint) {
    try {

      const response = await fetch(
        `http://localhost:3001/${endpoint}/get${
          endpoint.charAt(0).toUpperCase() + endpoint.slice(1)
        }`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "123",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      if (Array.isArray(data) && data.length > 0) {
        if (endpoint === "tasks") {
         dispatch(setTodos(data));
        } else if (endpoint === "goals") {
          dispatch(setGoals(data));
        }
      } else {
        console.log(`No hay ${endpoint} para procesar`);
      }
    } catch (err) {
      console.error(`Error fetching ${endpoint}:`, err);
    }
  }

  useEffect(() => {
    if (option) {
      initFetch(option);
    }
  }, [option]);

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
                {option === "tasks" &&
                  todos.map((todo, index) => (
                    <Item
                      key={index}
                      name={todo.name}
                      description={todo.description}
                      dueDate={todo.dueDate}
                      id={todo._id}
                    />
                  ))}
                {option === "goals" &&
                  goals.map((goal, index) => (
                    <Item
                      key={index}
                      name={goal.name}
                      description={goal.description}
                      dueDate={goal.dueDate}
                      id={goal.id}
                    />
                  ))}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
