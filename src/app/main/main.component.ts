import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {SettingsDialogComponent} from '../settings-dialog/settings-dialog.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    constructor(private router: Router, private matDialog: MatDialog) {
    }

    ngOnInit() {
    }

    adminLogin() {
        this.router.navigate(['/login']);
    }

    userLogin() {
        const url = localStorage.getItem('serverUrl');
        if (!url) {
            const sub = this.matDialog.open(SettingsDialogComponent).afterClosed().subscribe(value => {
                sub.unsubscribe();
                this.router.navigate(['/preview']);
            });
        } else {
            this.router.navigate(['/preview']);
        }
    }
}
