export default class InterCommRoutingService {
    static navigationProps ;

    static routeToScreen(screen , payload){
        this.navigationProps.navigate(screen, payload)
    }
}