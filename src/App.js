import logo from "./logo.svg";
import "./App.scss";
import Item from "./Components/Item/Item";
import Menu from "./Components/Menu/Menu";
import { Col, Container, Row } from "react-bootstrap";
import Formulario from "./Components/Formulario/Formulario";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initAddTodo } from "./reducers/todoSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.value);
  const goals = useSelector((state) => state.goals.value);
  const option = useSelector((state) => state.option.value);

  // const arr = [
  //   {
  //     name: "camiar al perro 1",
  //   },
  //   {
  //     name: "camiar al perro 2",
  //   }
  // ];


  async function initFetch() {
      fetch('http://localhost:3001/tasks/getTasks',{
        headers:{
          "Content-Type": "application/json",
          "Authorization": "123456"
        },
      }).then((response)=>
          response.json()
      ).then(response=>{
        console.log(response);
        response.map((task)=>{
          dispatch(initAddTodo(task));
        })
      }).catch((err)=>{
          console.log(err);
      });
  }
  
  useEffect(() => {
    initFetch();
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
              <div className='scrolling'>
            {option==='tasks' &&
                todos.map((todo, index)=>(
                  <Item key={index} name={todo.name} description={todo.description} dueDate={todo.dueDate} id={todo._id}/>
   
                 ))
            }      
           {option==='goals' &&
                goals.map((goal, index)=>(
                  <Item key={index} name={goal.name} description={goal.description} dueDate={goal.dueDate} d={goal.id}/>
   
                 ))
            }      
            </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
