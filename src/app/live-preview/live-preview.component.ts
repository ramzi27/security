import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SettingsDialogComponent} from '../settings-dialog/settings-dialog.component';

@Component({
    selector: 'app-live-preview',
    templateUrl: './live-preview.component.html',
    styleUrls: ['./live-preview.component.css']
})
export class LivePreviewComponent implements OnInit {
    isLoading = true;
    @Input()
    showHeader = true;

    constructor(public matDialog: MatDialog) {
    }

    ngOnInit() {
        const url = localStorage.getItem('serverUrl');
        if (!url) {
            this.matDialog.open(SettingsDialogComponent).afterClosed().subscribe(value => {
                setTimeout(() => {
                    this.isLoading = false;
                }, 1500);
            });
        } else {
            setTimeout(() => {
                this.isLoading = false;
            }, 1500);
        }
    }

    getLiveUrl() {
        const url = localStorage.getItem('serverUrl');
        if (url) { // todo change url
            return url + 'video_feed';
        }
    }
}
