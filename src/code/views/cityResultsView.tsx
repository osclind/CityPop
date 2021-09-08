import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {MouseEvent} from "react";

/**
 * This component displays the result of a search for cities. It makes use of the Card and Button
 * components from the react-bootstrap library.
 *
 * @param props: The object returned from the search (results)
 *               a function to restore the states to allow for a new search to be made (goBack)
 *               a boolean flag that indicates if the user is arriving from a country search or not (cityChosen
 */
function CityResultsView(props: {results: any, goBack: () => void, cityChosen: boolean | undefined}) {
  return <div className={"justify-content-center"}>
    <h2>{(props.cityChosen && props.results.name) || props.results.geonames[0]?.name}</h2>
    <Card className={"center-content"}>
      <p>POPULATION</p>
      {(props.cityChosen && props.results.population) || props.results.geonames[0]?.population}
    </Card>
    <Button variant={"outline-dark"} className={"mt-3"} onClick={(event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      props.goBack();
    }}>
      Make a new search
    </Button>
  </div>;
}

export default CityResultsView;