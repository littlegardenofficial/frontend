import { createAppContainer } from "react-navigation";
import {createDrawerNavigator} from 'react-navigation-drawer';
import homeStack from "./homeStack";
import SideMenu from '../shared/SideMenu/SideMenu';
import {DRAWER_WIDTH} from '../styles/theme';
import Profile from '../screens/Profile/Profile';
import ServiceableAreas from '../screens/ServiceAreas/ServiceableAreas';
import ordersStack from './orderStack';
import profileStack from './profileStack';
import serviceAreaStack from './serviceAreaStack';

const drawerNavigation = createDrawerNavigator(
  {
    Home: {
      screen: homeStack,
      navigationOptions: {
        title: 'Home',
      },
    },
    Profile: {
      screen: profileStack,
      navigationOptions: {
        title: 'My Profile',
      },
    },
    ServiceAreas: {
      screen: serviceAreaStack,
      navigationOptions: {
        title: 'Serviceable Areas',
      },
    },
    MyOrders: {
      screen: ordersStack,
      navigationOptions: {
        title: 'My Orders',
      },
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: SideMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: DRAWER_WIDTH,
  },
);

export default createAppContainer(drawerNavigation);