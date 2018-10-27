import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AuthService} from '../services/auth.service';
import {SettingsDialogComponent} from '../settings-dialog/settings-dialog.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private authService: AuthService, public matDialog: MatDialog) {
    }

    ngOnInit() {
    }

    logOut() {
        this.authService.logOut();
    }

    openSettings() {
        this.matDialog.open(SettingsDialogComponent);
    }
}
