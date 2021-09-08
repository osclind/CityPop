# CityPop
_A city population query application_
______________________

## What is it and how do I use it?
This app will give you information on the population of cities of the world.
You have the choice of either searching for a country to see the top 3 populated cities of that country, or search for an individual city.
If there are two (or more) cities with the same name, add the country code to make the search more specified.

## Setting up the development environment
First, make sure to have [NPM and Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your system.
You can check the existence of these programmes in your system with `npm -v` and `node -v`.
Then, clone this repository and cd into it `cd citypop`.
From the repo root, run `npm start` and wait until the server is up.
If `npm start` fails, run `npm install` and try again.
Once the server is up, open a browser window and navigate to `http://localhost:3000`.
You can now make changes to the source code, and they will (upon re-compilation) show up automatically in the browser window!

### TL;DR
1. Check that NPM and Node is installed or install them
2. Clone and navigate to repository
3. Run `npm install`
4. Run `npm start`
5. Open a browser and navigate to `http://localhost:3000`
6. Start coding!

#### API-key
The GeoNames api needs a username to be sent with each query.
For the project to function properly, create the file `username.ts` in the same folder as `popSource.ts` and add the following content to it:

```
const uName = "<YOUR USERNAME HERE>";

export default uName;
```

#### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
