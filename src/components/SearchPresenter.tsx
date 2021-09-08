import SearchView from "../code/views/searchView";
import promiseNoData from "../code/promiseNoData";
import React, {Dispatch, RefObject} from 'react';
import PopSource from "../code/popSource";
import CityResultsView from "../code/views/cityResultsView";
import CountryResultsView from "../code/views/countryResultsView";

function SearchPresenter(props: {searchByCity: boolean, searchByCountry: boolean}) {
  // State variables
  const [promise, setPromise]: [Promise<any> | undefined, Dispatch<Promise<any> | undefined>] = React.useState();
  const [data, setData]: [JSON | undefined, Dispatch<JSON | undefined>] = React.useState();
  const [error, setError]: [Error | undefined, Dispatch<Error | undefined>] = React.useState();
  const [fetched, setFetched]: [boolean | undefined, Dispatch<boolean>] = React.useState();
  const [cityChosen, setCityChosen]: [boolean | undefined, Dispatch<boolean>] = React.useState();

  // Ref to input DOM Element
  const searchRef: RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

  // Callbacks used in views
  const showCity: (city: any) => void = React.useCallback((city: any) => {
    setCityChosen(true);
    setData(city);
  }, []);
  const goBack: () => void = React.useCallback(() => {
    setData(undefined);
    setError(undefined);
    setPromise(undefined);
    setCityChosen(false);
    setFetched(false);
  }, []);
  const onSearch: (text: string) => void = React.useCallback((text: string) => {
    setData(undefined);
    setError(undefined);
    setPromise((props.searchByCity && PopSource.searchCityName(text)) || PopSource.searchCountryName(text));
  }, [props]);

  // Hook to fire when promise is updated
  React.useEffect(() => {
    const control: Promise<any> | undefined = promise;
    promise?.then(geoData => {
      if (!geoData.geonames.length)
        throw new Error("No results found, please check your search term for spelling mistakes");
      if (!fetched && props.searchByCountry) {
        setData(undefined);
        setError(undefined);
        setPromise(PopSource.getMostPopulatedCitiesOfCountry(geoData.geonames[0]?.countryCode));
        setFetched(true);
      }
      else if (promise === control) {
        setData(geoData);
      }
    }).catch(error => {
      if (promise === control)
        setError(error);
    });
  }, [promise, fetched, props]);
  return (<div>
      {!data &&
      <SearchView searchByCity={props.searchByCity}
                  searchByCountry={props.searchByCountry}
                  onSearch={onSearch}
                  searchRef={searchRef}/>}
    {promiseNoData(promise, data, error)
    ||
    ((props.searchByCity || cityChosen) && <CityResultsView results={data}
                                                            goBack={goBack}
                                                            cityChosen={cityChosen}/>)
    ||
    (props.searchByCountry && <CountryResultsView results={data}
                                                  goBack={goBack}
                                                  showCity={showCity}/>)}
    </div>
  );
}

export default SearchPresenter;