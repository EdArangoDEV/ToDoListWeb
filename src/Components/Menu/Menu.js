import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Menu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeOption } from '../../reducers/optionSlice';


function Menu() {
  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();

  const changeOptionFunction = (selectedOption) => (e) => {
    e.preventDefault();
    if (option !== selectedOption) {
      dispatch(changeOption(selectedOption));
    }
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav defaultActiveKey={option}>
            <Nav.Link eventKey="tasks" onClick={changeOptionFunction('tasks')}>
              Tasks
            </Nav.Link>
            <Nav.Link eventKey="goals" onClick={changeOptionFunction('goals')}>
              Goals
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Menu;