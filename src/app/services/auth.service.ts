import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from "@angular/material";
import {SettingsDialogComponent} from "../settings-dialog/settings-dialog.component";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn = false;

    constructor(private router: Router, public matDialog: MatDialog) {
    }

    public login() {
        this.isLoggedIn = true;
        const url = localStorage.getItem("serverUrl");
        if (!url) {
            this.matDialog.open(SettingsDialogComponent);
        }
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
