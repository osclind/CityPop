import uName from "./username";

const PopSource = {
  url: "http://api.geonames.org/searchJSON?",
  searchCityName: (city: string) => {
    let query: {
      name: string,
      isNameRequired: string,
      username: string,
      orderby: string,
      country: string
    } = {
      name: "",
      country: "",
      isNameRequired: "true",
      orderby: "population",
      username: uName
    };
    try {
      const searchString: string[] = city.split(",");
      query.name = searchString[0];
      query.country = searchString[1];
    } catch (e) {
      query.name = city;
    }
    return fetch(PopSource.url + new URLSearchParams(query)).then(response => {
      if (response.status === 200) return response;
      else throw new Error("No data returned, connection error");
    }).then(response => response.json());
  },
  searchCountryName: (country: string) => {
    const query = {
      "country": country,
      "orderby": "population",
      "username": uName,
    };
    return fetch(PopSource.url + new URLSearchParams(query)).then(response => {
      if (response.status === 200) return response;
      else throw new Error("No data returned, connection error");
    }).then(response => response.json());
  }
}

export default PopSource;