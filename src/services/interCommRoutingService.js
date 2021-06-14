import { Subject } from "rxjs";
import { showInfoFlashMessage } from "../utils/FlashMessageUtil";

export default class InterCommRoutingService {
    static navigationProps ;
    static haveUnsavedProfilePageChanges = false;

    static routeToScreen(screen , payload){
        // console.log(this.navigationProps);
        // console.log(this.navigationProps.state);
        // if (!this.isUserHaveUnsavedChanges(screen)) {
        this.navigationProps.navigate(screen, payload);
        // } else {
        //     showInfoFlashMessage('Please save your changes');
        // }
    }

    static isUserHaveUnsavedChanges() {
        if (this.navigationProps.state.routeName === 'myorders' && this.haveUnsavedProfilePageChanges) {
            return true;
        } else {
            return false;
        }
    }
}