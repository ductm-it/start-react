// import TodoList from "./components/todo/TodoList.js";
import Navigator from "./components/Navigator/Navigator.js";
import TableUsers from "./components/Users/TableUsers";
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <Navigator />
      <TableUsers />
      {/* <TodoList /> */}
    </Container>
  );
}

export default App;
