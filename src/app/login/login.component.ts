import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';


const USERNAME = 'ramzi';
const PASSWORD = '123456789';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @ViewChild('f')
    ngForm: NgForm;
    @ViewChild('username')
    username: HTMLInputElement;
    @ViewChild('password')
    password: HTMLInputElement;
    isError = false;
    hidePassword = true;

    constructor(private router: Router, private authService: AuthService) {
    }

    ngOnInit() {
    }

    login() {
        const user = this.username.value;
        const pass = this.password.value;
        const id = setTimeout(() => {
            this.ngForm.reset();
            this.isError = false;
            clearTimeout(id);
        }, 30000);
        if (user === USERNAME && pass === PASSWORD) {
            this.authService.login();
            this.ngForm.reset();
            this.isError = false;
        } else {
            this.isError = true;
            this.ngForm.reset(this.ngForm.value);
        }
    }
}
