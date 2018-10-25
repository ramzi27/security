import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

export interface DialogData {
    url: string;
}

@Component({
    selector: 'app-image-dialog',
    templateUrl: './image-dialog.component.html',
    styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent implements OnInit {
    uploadUrl: string;

    constructor(public matDialogRef: MatDialogRef<ImageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    ngOnInit() {
        this.uploadUrl = this.data.url;
        console.log(this.uploadUrl);
    }

    closeDialog() {
        this.matDialogRef.close();
    }

}
