import SearchView from "../code/views/searchView";
import React from 'react';

function SearchPresenter(props: {searchByCity: boolean, searchByCountry: boolean}) {
  const [searchQuery, setSearchQuery] = React.useState("");
  return <SearchView searchByCity={props.searchByCity} searchByCountry={props.searchByCountry} searchQuery={searchQuery}/>;
}

export default SearchPresenter;