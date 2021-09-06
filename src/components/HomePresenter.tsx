import HomeView from "../code/views/homeView";
import {useHistory} from 'react-router-dom';

function HomePresenter(props: {}) {
  const sayHello = () => {
    console.log("Hello World!");
  };
  const history = useHistory();
  return <HomeView sayHello={sayHello} redirect={(destination: string)=>history.push(destination)}/>
}

export default HomePresenter;