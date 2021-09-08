import uName from "./username";

/**
 * This module is the source of all api-calls. The uName variable is an api-key and should not
 * be checked in to the repo, since it may get revoked or misused if published.
 */
const PopSource = {
  url: "http://api.geonames.org/searchJSON?",
  /**
   * This function compounds a query that requests information about cities with names that match the query parameter 'name'.
   *
   * @param city a string representing the user input
   * @returns A promise that resolves once the server responds to the sent request
   */
  searchCityName: (city: string) => {
    const query: {
      name: string,
      isNameRequired: string,
      username: string,
      orderby: string,
      featureClass: string,
      country: string
    } = {
      name: "",
      country: "",
      isNameRequired: "true",
      orderby: "relevance",
      featureClass: "P",
      username: uName
    };
    try {
      const searchString: string[] = city.split(",");
      query.name = searchString[0].trim();
      query.country = searchString[1].trim();
    } catch (e) {
      query.name = city;
    }
    if (PopSource.queryEmpty(city)) return undefined;
    return PopSource.sendRequest(new URLSearchParams(query).toString());
  },

  /**
   * This function compounds a query that requests information about entities of class 'A' (according to GeoNames) with names that match the query parameter 'name'.
   * @param country the search query entered by the user
   * @returns A promise that resolves once the server responds to the sent request
   */
  searchCountryName: (country: string) => {
    const query: {
      name: string,
      username: string,
      orderby: string,
      featureClass: string,
    } = {
      name: country,
      orderby: "relevance",
      featureClass: "A",
      username: uName,
    };
    if (PopSource.queryEmpty(country)) return undefined;
    return PopSource.sendRequest(new URLSearchParams(query).toString());
  },

  /**
   * This function uses the country code to fetch the most populated cities of a country.
   *
   * @param countryCode a string with the country code of the country whose cities are queried
   * @return A promise that resolves once the server responds to the sent request
   */
  getMostPopulatedCitiesOfCountry: (countryCode: string) => {
    const query: {
      country: string,
      username: string,
      orderby: string,
      featureClass: string,
    } = {
      country: countryCode,
      orderby: "population",
      featureClass: "P",
      username: uName,
    };
    if (PopSource.queryEmpty(countryCode)) return undefined;
    return PopSource.sendRequest(new URLSearchParams(query).toString());
  },

  /**
   * This function takes the url encoded query object and sends a get request to the GeoNames API
   * @param queryUrl a urlencoded element with the desired search queries
   * @returns A promise that resolves once the server responds to the sent request
   */
  sendRequest: (queryUrl: string) => {
    return fetch(PopSource.url + queryUrl).then(response => {
      if (response.status === 200) return response;
      else throw new Error("No data returned, connection error");
    }).then(response => response.json());
  },

  /**
   * This function checks that the query is not empty, since an empty query will not be precise and thus threatens
   * to deplete the api key if no limits are set or throttling is used (it is not in this small project.
   * @param text the text entered by the user for a search
   * @returns A boolean indicating whether the input is empty or not
   */
  queryEmpty: (text: string) => {
    return text === "";
  }
}

export default PopSource;