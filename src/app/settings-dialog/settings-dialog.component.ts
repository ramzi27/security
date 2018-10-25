import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
    selector: 'app-settings-dialog',
    templateUrl: './settings-dialog.component.html',
    styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent implements OnInit {

    url: string = '';

    constructor(public matDialog: MatDialogRef<SettingsDialogComponent>) {
    }

    ngOnInit() {

    }

    closeDialog() {
        this.matDialog.close();
    }

    saveUrl() {
        localStorage.setItem("serverUrl", this.url);
        alert("Server Url Saved");
        this.matDialog.close();
    }
}
