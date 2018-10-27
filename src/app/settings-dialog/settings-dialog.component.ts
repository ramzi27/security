import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-settings-dialog',
    templateUrl: './settings-dialog.component.html',
    styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent implements OnInit {

    url = localStorage.getItem('serverUrl') ? localStorage.getItem('serverUrl') : '';

    constructor(public matDialog: MatDialogRef<SettingsDialogComponent>) {
    }

    ngOnInit() {
        this.matDialog.disableClose = true;
    }

    closeDialog() {
        this.matDialog.close();
    }

    saveUrl() {
        if (!this.url.endsWith('/')) {
            this.url += '/';
        }
        localStorage.setItem('serverUrl', this.url);
        this.matDialog.close();
    }
}
