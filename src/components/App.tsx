import React from 'react';
import '../css/App.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import HomePresenter from './HomePresenter';
import SearchPresenter from "./SearchPresenter";
import {Switch, Route, useHistory} from 'react-router-dom';

/**
 * The app root, this is where the overall app is controlled
 */
function App() {
  const history = useHistory();
  return (
    <div className="App">
      {/* The jumbotron below is the "banner" at the top, acting as the home-button */}
      <Jumbotron fluid className={"mt-5 mb-5"} role={"button"} onClick={() => {
        history.push("/");
      }}>
        <Container>
          <h1>CityPop</h1>
          <h5>Your city population query machine</h5>
          <p>Click me at any point to choose a different search mode</p>
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
