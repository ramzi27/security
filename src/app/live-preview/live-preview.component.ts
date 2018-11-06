import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventsService} from '../services/events.service';
import {stream} from "../services/api";

@Component({
    selector: 'app-live-preview',
    templateUrl: './live-preview.component.html',
    styleUrls: ['./live-preview.component.css']
})
export class LivePreviewComponent implements OnInit, OnDestroy {
    isLoading = true;
    @Input()
    showHeader = true;
    audio = new Audio('../../../assets/warning.mp3');

    constructor(private eventService: EventsService, private router: Router) {
    }

    ngOnInit() {
        this.eventService.startStream();
        const id = setTimeout(() => {
            this.isLoading = false;
            clearTimeout(id);
        }, 1500);
    }

    getLiveUrl() {
        const url = localStorage.getItem('serverUrl');
        if (url) {
            return stream(url).live;
        }
    }

    stop() {
        this.eventService.stopStream();
    }

    reload() {
        this.router.navigate(['/preview']);
    }

    ngOnDestroy(): void {
        console.log('destroyed', this.isLoading);
        this.audio.pause();
        this.audio.remove();
        if (!this.isLoading) {
            this.eventService.stopStream();
        }
    }
}
