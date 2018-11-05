import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {SettingsDialogComponent} from '../settings-dialog/settings-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router, public matDialog: MatDialog) {
    }

    public login() {
        localStorage.setItem('isLogged', 'true');
        const url = localStorage.getItem('serverUrl');
        if (!url) {
            const sub = this.matDialog.open(SettingsDialogComponent).afterClosed().subscribe(value => {
                this.router.navigate(['/home'], {replaceUrl: true});
                sub.unsubscribe();
            });
        } else {
            this.router.navigate(['/home'], {replaceUrl: true});
        }

    }

    public logOut() {
        localStorage.clear();
        this.router.navigate(['/main'], {replaceUrl: true});
    }

    public checkLogin() {
        const isLogged = localStorage.getItem('isLogged');
        if (!isLogged) {
            return false;
        }
        return true;
    }
}
