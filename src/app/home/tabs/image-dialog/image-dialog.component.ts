import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../../services/user';

export interface DialogData {
    url: string;
    user: User;
}

@Component({
    selector: 'app-image-dialog',
    templateUrl: './image-dialog.component.html',
    styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent implements OnInit {
    uploadUrl: string;
    user: User;

    constructor(public matDialogRef: MatDialogRef<ImageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    ngOnInit() {
        this.matDialogRef.disableClose = true;
        this.uploadUrl = this.data.url;
        this.user = this.data.user;
    }

    closeDialog() {
        this.matDialogRef.close();
    }

}
