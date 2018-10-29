import {Injectable} from '@angular/core';
import {Observable, timer} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    constructor() {
    }

    getAlerts(): Observable {
        return timer(0, 5000);
    }
}
