import {MouseEvent} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

/**
 * This component displays the result of a search for countries. It makes use of the Card and Button
 * components from the react-bootstrap library.
 *
 * @param props: The result of a search for a country (results)
 *               a function to reset the states to allow for a new search to be made (goBack)
 *               a function that allows for a city to be shown in the CityResultsView after clicking on it in this view (showCity)
 */
function CountryResultsView(props: {results: any, goBack: () => void, showCity: (city: any) => void}) {
  return <div>
    <h2>{props.results.geonames[0]?.countryName}</h2>
    {
      props.results.geonames?.slice(0,3).map((c: any) => {
        return <Card className={"center-content mt-2"}
                     key={c.geonameId}
                     onClick={() => {
                       props.showCity(c);
                     }}
                     role={"button"}>
          <h4 className={"mt-2"}>{c.name}</h4>
        </Card>
      })
    }
    <Button variant={"outline-dark"} className={"mt-3"} onClick={(event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      props.goBack();
    }}>
      Make a new search
    </Button>
  </div>;
}

export default CountryResultsView;