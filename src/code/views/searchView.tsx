import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Search from "../../search.png";

function SearchView(props: {searchByCity: boolean, searchByCountry: boolean, searchQuery: string}) {
  const placeholder: string = (props.searchByCity && "Paris, FR") || (props.searchByCountry && "France") || "";
  return <div>
    <h3>SEARCH BY {(props.searchByCity && "CITY") || (props.searchByCountry && "COUNTRY")}</h3>
    <InputGroup className={"justify-content-center"}>
      <FormControl placeholder={placeholder} className={"searchBox"}/>
    </InputGroup>
    <img src={Search} alt={""} width={"5%"} className={"mt-3"}/>
  </div>;
}

export default SearchView;