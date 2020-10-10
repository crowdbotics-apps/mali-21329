import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile136204Navigator from '../features/UserProfile136204/navigator';
import Tutorial136203Navigator from '../features/Tutorial136203/navigator';
import NotificationList136175Navigator from '../features/NotificationList136175/navigator';
import Settings136174Navigator from '../features/Settings136174/navigator';
import Settings136166Navigator from '../features/Settings136166/navigator';
import UserProfile136164Navigator from '../features/UserProfile136164/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile136204: { screen: UserProfile136204Navigator },
Tutorial136203: { screen: Tutorial136203Navigator },
NotificationList136175: { screen: NotificationList136175Navigator },
Settings136174: { screen: Settings136174Navigator },
Settings136166: { screen: Settings136166Navigator },
UserProfile136164: { screen: UserProfile136164Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
