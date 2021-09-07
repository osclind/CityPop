import SearchView from "../code/views/searchView";
import promiseNoData from "../code/promiseNoData";
import React, {Dispatch, RefObject} from 'react';
import PopSource from "../code/popSource";
import CityResultsView from "../code/views/cityResultsView";

function SearchPresenter(props: {searchByCity: boolean, searchByCountry: boolean}) {
  const [promise, setPromise]: [Promise<any> | undefined, Dispatch<Promise<any> | undefined>] = React.useState();
  const [data, setData]: [JSON | undefined, Dispatch<JSON | undefined>] = React.useState();
  const [error, setError]: [Error | undefined, Dispatch<Error | undefined>] = React.useState();
  const searchRef: RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();
  const goBack: () => void = React.useCallback(() => {
    setData(undefined);
    setError(undefined);
    setPromise(undefined);
  }, []);
  React.useEffect(() => {
    const control: Promise<any> | undefined = promise;
    promise?.then(data => {
      if (!data.geonames.length)
        throw new Error("No results found, please check your search term for spelling mistakes");
      if (promise === control) {
        setData(data);
      }
    }).catch(error => {
      if (promise === control)
        setError(error);
    });
  }, [promise]);
  const onSearch: (text: string) => void = React.useCallback((text: string) => {
    setData(undefined);
    setError(undefined);
    setPromise((props.searchByCity && PopSource.searchCityName(text)) || PopSource.searchCountryName(text));
  }, [props]);
  return (<div>
      {!data &&
      <SearchView searchByCity={props.searchByCity} searchByCountry={props.searchByCountry} onSearch={onSearch}
                  searchRef={searchRef}/>}
    {promiseNoData(promise, data, error) || (props.searchByCity && <CityResultsView results={data} goBack={goBack}/>)}
    </div>
  );
}

export default SearchPresenter;