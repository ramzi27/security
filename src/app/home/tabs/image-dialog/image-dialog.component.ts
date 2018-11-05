import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import APIS from '../../../services/api';
import {User} from '../../../services/user';


@Component({
    selector: 'app-image-dialog',
    templateUrl: './image-dialog.component.html',
    styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent implements OnInit {
    uploadUrl: string;
    user: User;

    constructor(public matDialogRef: MatDialogRef<ImageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: User) {
    }

    ngOnInit() {
        this.matDialogRef.disableClose = true;
        const url = localStorage.getItem('serverUrl');
        this.uploadUrl = APIS(url, this.data).image.upload;
        this.user = this.data;
    }

    closeDialog() {
        this.matDialogRef.close();
    }

}
