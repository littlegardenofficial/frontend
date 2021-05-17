import { createAppContainer } from "react-navigation";
import {createDrawerNavigator} from 'react-navigation-drawer';
import homeStack from "./homeStack";
import SideMenu from '../shared/SideMenu/SideMenu';
import {DRAWER_WIDTH} from '../styles/theme';

const drawerNavigation = createDrawerNavigator(
  {
    Home: {
      screen: homeStack,
      navigationOptions: {
        title: 'Home',
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