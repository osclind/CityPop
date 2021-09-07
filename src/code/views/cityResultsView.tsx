import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {MouseEvent} from "react";

function CityResultsView(props: {results: any, goBack: () => void}) {
  return <div className={"justify-content-center"}>
    <h2>{props.results.geonames[0]?.toponymName}</h2>
    <Card className={"center-content"}>
      <p>POPULATION</p>
      {props.results.geonames[0]?.population}
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