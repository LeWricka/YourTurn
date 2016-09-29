import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';
import {ListPage} from './pages/list/list';
import {HomePage} from './pages/main/home';
import {LoginService} from "./providers/login/login-service";
import {Events} from "ionic-angular/index";

@Component({
    templateUrl: 'build/app.html',
    providers: [LoginService]
})
class MyApp {
    @ViewChild(Nav) nav:Nav;

    rootPage:any = LoginPage;
    pages:Array<{title: string, component: any}>;

    constructor(private platform:Platform,
                private menu:MenuController,
                private events:Events) {
        this.initializeApp();
        // this.eventSubscription();

        // set our app's pages
        this.pages = [
            {title: 'Login', component: LoginPage},
            {title: 'My First List', component: ListPage},
            {title: 'Home', component: HomePage}
        ];
    }

    eventSubscription() {
        console.log("EVENT SUBSCRITION");
        this.events.subscribe('user:login', () => {
            this.nav.setRoot(ListPage);
        });

        this.events.subscribe('user:logout', () => {
            this.nav.setRoot(ListPage)
        });
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    }
}

ionicBootstrap(MyApp);
