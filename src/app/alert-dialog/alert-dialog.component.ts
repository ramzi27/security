import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

enum DbTypes {
    blacklist,
    whitelist
}

@Component({
    selector: 'app-alert-dialog',
    templateUrl: './alert-dialog.component.html',
    styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {

    dbTypes = DbTypes;
    constructor(
        public matDialog: MatDialogRef<AlertDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public matData: string,
        private snackService: MatSnackBar,
        private router: Router
    ) {
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

    addTo(type: DbTypes) {
        this.snackService.open("Image Was Added To Image List .....", "ok");
        this.router.navigate(['/add-user']);
        if (type == DbTypes.whitelist) { //todo send image

        } else {

        }
    }
}
