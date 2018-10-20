import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn = false;

    constructor() {
    }

    public login() {
        this.isLoggedIn = true;
    }

    public logOut() {
        this.isLoggedIn = false;
    }

    public checkLogin() {
        return this.isLoggedIn;
    }
}
