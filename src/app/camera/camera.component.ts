import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Observable, Subject} from 'rxjs';
import {User} from '../services/user';
import {UserService} from '../services/user.service';

@Component({
    selector: 'app-camera',
    templateUrl: './camera.component.html',
    styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
    images: WebcamImage[] = [];
    audio = new Audio('../../../assets/camera.mp3');
    public videoOptions: MediaTrackConstraints = {};
    public errors: WebcamInitError[] = [];

    public webcamImage: WebcamImage = null;

    private trigger: Subject<void> = new Subject<void>();

    private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

    constructor(
        public matDialogRef: MatDialogRef<CameraComponent>,
        @Inject(MAT_DIALOG_DATA) public matData: User
        , private userService: UserService,
    ) {
    }

    public get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }

    public get nextWebcamObservable(): Observable<boolean | string> {
        return this.nextWebcam.asObservable();
    }

    public ngOnInit(): void {
        this.matDialogRef.disableClose = true;
        WebcamUtil.getAvailableVideoInputs()
            .then((mediaDevices: MediaDeviceInfo[]) => {
            });
    }

    public triggerSnapshot(): void {
        this.trigger.next();
    }

    public handleInitError(error: WebcamInitError): void {
        console.error(error.message);
        this.errors.push(error);
    }

    public showNextWebcam(directionOrDeviceId: boolean | string): void {
        this.nextWebcam.next(directionOrDeviceId);
    }

    public handleImage(webcamImage: WebcamImage): void {
        this.webcamImage = webcamImage;
        this.audio.play();
        this.images.push(webcamImage);
    }

    closeDialog() {
        this.audio.remove();
        this.matDialogRef.close();
    }

    removeImage(i: number) {
        this.images.splice(i, 1);
    }

    async uploadImages() {
        this.matDialogRef.close();
        const myImages: string[] = [];
        this.images.forEach(value => myImages.push(value.imageAsDataUrl));
        await this.userService.uploadImages(myImages, this.matData);
    }


}
