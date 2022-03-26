// import logo from './logo.svg';
import "./App.css";
import { Button, Container, Form } from "react-bootstrap";
import { SearchForm } from "./components/form/SearchForm";
import { Title } from "./components/title/Title";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm />
      </Container>
    </div>
  );
}

export default App;
