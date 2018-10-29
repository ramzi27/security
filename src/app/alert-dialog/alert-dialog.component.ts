import {Component, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-alert-dialog',
    templateUrl: './alert-dialog.component.html',
    styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {
    startDate = new Date(1990, 0, 1);
    LIST_TYPES = [{name: 'White List', value: 'whiteList'}, {name: 'Black List', value: 'blackList'}];
    @ViewChild('f')
    ngForm: NgForm;
    isDone = false;


    constructor(
        public matDialog: MatDialogRef<AlertDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public matData: string
    ) {
    }

    resetForm() {
        this.isDone = false;
        this.ngForm.reset();
    }

    ngOnInit() {
        this.matDialog.disableClose = true;
    }

    close() {
        this.matDialog.close();
    }

    @HostListener('document:keydown.escape')
    closeListner() {
        this.matDialog.close();
    }

}
