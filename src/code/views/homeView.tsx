function HomeView(props: {sayHello: Function, redirect: Function}) {
  console.log("rendered");
  return <div className={"col-6 justify-content-center btn-group"} role="group" aria-label={"Choice group"}>
    <button type={"button"} onClick={()=> {
      props.sayHello();
      props.redirect("/country");
    }} className={"btn btn-outline-dark btn-lg"}>Search by country</button>
    <p> </p>
    <button type={"button"} onClick={()=> {
      props.sayHello();
      props.redirect("/city");
    }} className={"btn btn-outline-dark btn-lg"}>Search by city</button>
  </div>
}

export default HomeView;