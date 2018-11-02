import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Subscription} from 'rxjs';
import {AlertDialogComponent} from '../alert-dialog/alert-dialog.component';
import {AuthService} from '../services/auth.service';
import {EventsService} from '../services/events.service';
import {SettingsDialogComponent} from '../settings-dialog/settings-dialog.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

    subscription: Subscription;
    @Input()
    showExtras = true;

    constructor(private authService: AuthService,
                public matDialog: MatDialog,
                private eventService: EventsService
    ) {
    }

    ngOnInit() {
        if (!this.showExtras) {
            return;
        }
        this.subscription = this.eventService.getAlerts().subscribe(value => {
            console.log(value);
            if (value === 3) {
                this.matDialog.open(AlertDialogComponent, {data: 'http://img.timeinc.net/time/daily/2010/1011/poy_nomination_agassi.jpg'});
            }
        });
    }

    logOut() {
        this.authService.logOut();
    }

    openSettings() {
        this.matDialog.open(SettingsDialogComponent);
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    checkAlerts() {

    }
}
