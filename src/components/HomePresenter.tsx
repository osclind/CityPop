import HomeView from "../code/views/homeView";
import {useHistory} from 'react-router-dom';

/**
 * A controller Component for HomeView
 */
function HomePresenter() {
  const history = useHistory();
  return <HomeView redirect={(destination: string)=>history.push(destination)}/>
}

export default HomePresenter;