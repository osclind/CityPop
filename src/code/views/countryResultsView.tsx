import {MouseEvent} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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