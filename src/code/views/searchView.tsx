import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Search from "../../search.png";
import Form from "react-bootstrap/Form";
import {KeyboardEvent, FormEvent, RefObject} from "react";

/**
 * This component displays the search interface, it is polymorphic and contents depend on whether the user want
 * to search for a country or a city
 *
 * @param props searchByCity indicates whether the user want to search for a city
 *              searchByCountry indicates whether the user want to search for a country
 *              onSearch is a function that fires off the search api-call
 *              searchRef is a ref-object that makes it easier to access the search query from the input element
 */
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