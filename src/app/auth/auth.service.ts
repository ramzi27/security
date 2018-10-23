import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn = false;

    constructor(private router: Router) {
    }

    public login() {
        this.isLoggedIn = true;
        this.router.navigate(['/home']);
    }

    public logOut() {
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
    }

    public checkLogin() {
        return this.isLoggedIn;
    }
}
