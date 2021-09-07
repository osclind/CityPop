import uName from "./username";

const PopSource = {
  url: "http://api.geonames.org/searchJSON?",
  searchCityName: (city: string) => {
    let query: {
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
  searchCountryName: (country: string) => {
    const query = {
      "name": country,
      "orderby": "relevance",
      "featureClass": "A",
      "username": uName,
    };
    if (PopSource.queryEmpty(country)) return undefined;
    return PopSource.sendRequest(new URLSearchParams(query).toString());
  },
  getMostPopulatedCitiesOfCountry: (countryCode: string) => {
    const query = {
      country: countryCode,
      orderby: "population",
      featureClass: "P",
      username: uName,
    };
    if (PopSource.queryEmpty(countryCode)) return undefined;
    return PopSource.sendRequest(new URLSearchParams(query).toString());
  },
  sendRequest: (queryUrl: string) => {
    return fetch(PopSource.url + queryUrl).then(response => {
      if (response.status === 200) return response;
      else throw new Error("No data returned, connection error");
    }).then(response => response.json());
  },
  queryEmpty: (text: string) => {
    return text === "";
  }
}

export default PopSource;