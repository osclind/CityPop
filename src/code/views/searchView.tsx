import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Search from "../../search.png";
import {Form} from "react-bootstrap";
import {KeyboardEvent, FormEvent, RefObject} from "react";

function SearchView(props: {searchByCity: boolean, searchByCountry: boolean, onSearch: Function, searchRef: RefObject<HTMLInputElement>}) {
  const placeholder: string = (props.searchByCity && "Paris, FR") || (props.searchByCountry && "France") || "";
  return <div>
    <h3>SEARCH BY {(props.searchByCity && "CITY") || (props.searchByCountry && "COUNTRY")}</h3>
    <Form onSubmit={(event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    }}>
      <InputGroup className={"justify-content-center"}>
        <FormControl placeholder={placeholder} className={"searchBox"} onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => {
          event.preventDefault();
          if (event.key === "Enter") props.onSearch(event.currentTarget.value);
        }} ref={props.searchRef}/>
      </InputGroup>
    </Form>
    <img src={Search} alt={""} width={"5%"} className={"mt-3"} role={"button"} onClick={event => {
      event.preventDefault();
      props.onSearch(props.searchRef.current?.value);
    }}/>
  </div>;
}

export default SearchView;