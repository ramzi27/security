import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventsService} from '../services/events.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    selectedIndex = 0;

    constructor(private router: Router, private eventService: EventsService) {
    }

    ngOnInit() {
    }

    openAddUser() {
        this.router.navigate(['/add-user'], {});
    }

    changeIndex(event) {
        this.selectedIndex = event;
        if (this.selectedIndex === 0 || this.selectedIndex === 1) {
            this.eventService.stopStream();
        }
    }

    ngOnDestroy(): void {
        this.eventService.stopStream();
    }
}
