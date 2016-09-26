import {Page, Nav} from 'ionic-angular';
import {Component} from '@angular/core';
import {LoginService} from '../../providers/login/login-service';
import {HomePage} from '../main/home';
declare var firebase:any;

@Page({
    templateUrl: 'build/pages/login/login.html'
})

@Component({
    providers: [LoginService]
})

export class LoginPage {

    constructor(login:LoginService) {
        login.load();
    }
}