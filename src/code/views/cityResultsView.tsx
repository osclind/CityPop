import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {MouseEvent} from "react";

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