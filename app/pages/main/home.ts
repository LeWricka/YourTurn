import {Page} from 'ionic-angular';
import {Component} from '@angular/core';
import {LoginService} from '../../providers/login/login-service'


@Page({
    templateUrl: 'build/pages/main/home.html'
})

@Component({
    providers: [LoginService]
})

export class HomePage {
    login: LoginService;
    name: string;

    constructor(login:LoginService) {
        this.login = login;
        console.log('5 secs');
        this.getUser();
    }

    getUser() {
        var user = this.login.getUser();
        this.name = user.email.replace(/@.*/, '');
        setTimeout(function(){
            console.log('5 timeout');
        },(5000));
        this.login.logOut();
    }
}
