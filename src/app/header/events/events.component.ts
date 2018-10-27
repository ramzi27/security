import {Component, ElementRef, HostListener, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {
    visable = false;
    events: Event[] = [];
    isDataLoading = true;
    intervalId: number;

    constructor(private userService: UserService, private eRef: ElementRef) {
    }

    ngOnInit() {
        // this.intervalId = setInterval(() => this.getEvents(), 5000);
    }

    @HostListener('document:keydown', ['$event'])
    onEscPressed(event: KeyboardEvent) {

        if (this.visable && event.key === 'Escape') {
            this.visable = false;
        }
    }

    openEvents() {
        this.isDataLoading = true;
        this.getEvents();
        this.visable = !this.visable;
        if (this.visable) {

        }
    }

    getEvents() {
        this.userService.getEvents().subscribe(value => {
            this.events = value;
            this.isDataLoading = false;
        });
    }

    ngOnDestroy(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}
