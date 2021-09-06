import HomeView from "../code/views/homeView";

function HomePresenter(props: {}) {
  const sayHello = () => {
    console.log("Hello World!");
  }
  return <HomeView sayHello={sayHello} setSearchState={(destination: string)=>console.log("Show " + destination + " search view")}/>
}

export default HomePresenter;