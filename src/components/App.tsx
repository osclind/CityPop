import React from 'react';
import '../css/App.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import HomePresenter from './HomePresenter';
import SearchPresenter from "./SearchPresenter";
import {Switch, Route, useHistory} from 'react-router-dom';

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Jumbotron fluid className={"mt-5 mb-5"} role={"button"} onClick={() => {
        history.push("/");
      }}>
        <Container>
          <h1>CityPop</h1>
        </Container>
      </Jumbotron>
      <Switch>
        <Route exact path="/">
          <HomePresenter/>
        </Route>
      <Route exact path="/city">
        <SearchPresenter searchByCity={true} searchByCountry={false}/>
      </Route>
      <Route exact path="/country">
        <SearchPresenter searchByCity={false} searchByCountry={true}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
