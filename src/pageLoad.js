import createRestaurantHomePage from './restaurant';
import createSelectMenu from './menuSelect';

function initialLoad() {
  createSelectMenu();
  createRestaurantHomePage();
}

export default initialLoad;
