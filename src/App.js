// import logo from './logo.svg';
import "./App.css";
import { Button, Container, Form } from "react-bootstrap";
import { SearchForm } from "./components/form/SearchForm";
import { Title } from "./components/title/Title";
import { useState } from "react";
import { Favlist } from "./components/list/Favlist";

function App() {
  const [favList, setFavList] = useState(["Shibin", "Shine", "Shhhhs"]);
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm />
        <hr />
        <Favlist favList={favList} />
      </Container>
    </div>
  );
}

export default App;
