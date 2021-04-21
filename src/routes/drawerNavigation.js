import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import aboutStack from "./aboutStack";
import homeStack from "./homeStack";
import SideMenu from '../shared/SideMenu'

const drawerNavigation = createDrawerNavigator({
    Home : {
        screen: homeStack
    },
    About : {
        screen : aboutStack
    }
    },{
        initialRouteName: 'Home',
        contentComponent: SideMenu,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        drawerWidth: 300
      }
    );

export default createAppContainer(drawerNavigation);