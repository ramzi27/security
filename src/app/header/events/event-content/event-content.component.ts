import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-event-content',
    templateUrl: './event-content.component.html',
    styleUrls: ['./event-content.component.css']
})
export class EventContentComponent implements OnInit {
    @Input()
    isDataLoading;
    @Input()
    events: Event[];
    ICONS_COLORS = {
        LOGIN: 'primary',
        LOGOUT: 'primary',
        UNKNOWN: 'warn',
        WHITELIST: 'accent',
        BLACKLIST: 'warn'
    };
    Event_Icons = {
        LOGIN: 'account_circle',
        LOGOUT: 'exit_to_app',
        UNKNOWN: 'warning',
        WHITELIST: 'lock_open',
        BLACKLIST: 'lock'
    };

    constructor() {
    }

    ngOnInit() {
    }

}
