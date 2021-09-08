import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

function HomeView(props: {redirect: Function}) {
  return <ButtonGroup className={"col-6 justify-content-center"} aria-label={"Choice group"}>
    <Button variant={"outline-dark"}
            size={"lg"}
            onClick={()=> {
              props.redirect("/country");
            }}>
      Search by country
    </Button>
    <Button variant={"outline-dark"}
            size={"lg"}
            onClick={()=> {
              props.redirect("/city");
            }}>
      Search by city
    </Button>
  </ButtonGroup>
}

export default HomeView;