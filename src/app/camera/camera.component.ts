import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
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
    public videoOptions: MediaTrackConstraints = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
    };
    public errors: WebcamInitError[] = [];
    // latest snapshot
    public webcamImage: WebcamImage = null;
    // webcam snapshot trigger
    private trigger: Subject<void> = new Subject<void>();
    // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
    private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

    constructor(
        public matDialogRef: MatDialogRef<CameraComponent>,
        @Inject(MAT_DIALOG_DATA) public matData: User
        , private userService: UserService,
        public snackBar: MatSnackBar
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
        console.log(webcamImage);
        this.images.push(webcamImage);
    }

    closeDialog() {
        this.matDialogRef.close();
    }

    removeImage(i: number) {
        this.images.splice(i, 1);
    }

    uploadImages() {
        this.images.forEach((image, index) => {
            this.userService.uploadImage(image, this.matData).subscribe(
                value => {
                    console.log(index, value);
                });
        });
        this.matDialogRef.close();
        this.snackBar.open('Images Are Uploading ....', 'ok');
    }
}
