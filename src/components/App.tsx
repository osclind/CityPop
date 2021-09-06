import React from 'react';
import '../css/App.css';
import PopSource from "../code/popSource";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import HomePresenter from './HomePresenter';

function App() {
  PopSource.searchCityName("Paris, fr").then(result => console.log(result)).catch(e => console.error(e));
  PopSource.searchCountryName("fr").then(result => console.log(result)).catch(e => console.error(e));
  return (
    <div className="App">
      <Jumbotron fluid className={"mt-5 mb-5"}>
        <Container>
          <h1>CityPop</h1>
        </Container>
      </Jumbotron>
      <HomePresenter/>
    </div>
  );
}

export default App;
