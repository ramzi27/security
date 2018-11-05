import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, timer} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    constructor(private httpClient: HttpClient) {
    }

    getAlerts(): Observable<number> {
        return timer(0, 5000);
    }

    stopStream() {
        const url = localStorage.getItem('serverUrl');
        if (!url) {
            return;
        }
        // const sub = this.httpClient.get(url + 'stop_stream').subscribe(value => {
        //     sub.unsubscribe();
        // });
    }

    startStream() {
        const url = localStorage.getItem('serverUrl');
        if (!url) {
            return;
        }
        // const sub = this.httpClient.get(url + 'start_stream').subscribe(value => {
        //     sub.unsubscribe();
        // });
    }
}
