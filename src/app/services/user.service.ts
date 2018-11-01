import {HttpClient, HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {WebcamImage} from 'ngx-webcam';
import {Observable} from 'rxjs';
import {Image} from '../gallery/image.model';
import {DB_TYPES, User} from './user';
import {APIS} from "./api";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    getEvents(): Observable<Event[]> {
        const url = this.getBaseUrl();
        if (!url) {
            return null;
        }
        return this.http.get<Event[]>('http://www.mocky.io/v2/5bd46ddf3200008400a3bdbe');

    }

    getBaseUrl() {
        return localStorage.getItem('serverUrl');
    }

    public getUsers(dbType: DB_TYPES): Observable<User[]> {
        const url = this.getBaseUrl();
        if (url) {
            return this.http.get<User[]>(APIS(url, dbType).users.get);
        }
    }

    public train(user: User) {

    }

    public removeUser(user: User, dbType: DB_TYPES) {
        const url = this.getBaseUrl();
        if (url) {
            return this.http.delete(APIS(url, dbType).users.remove + user.id);
        }
    }

    addUser(user: User, dbType: DB_TYPES): Observable<any> {
        const url = this.getBaseUrl();
        if (url) {
            return this.http.post(APIS(url, dbType).users.add, user);
        }
    }

    public getImages(): Observable<Image[]> {
        return this.http.get<Image[]>('http://www.mocky.io/v2/5bd47a243200008600a3bddc');
    }

    public uploadImage(image: WebcamImage, user: User): Observable<HttpEvent<any>> {
        const formData = new FormData();
        let url = this.getBaseUrl();
        // url += '/images' + '/' + user.name;
        url = 'http://localhost:5000/images/' + user.name;
        const blob = this.dataURItoBlob(image.imageAsDataUrl);
        const fileName = new Date().getTime() + '.jpeg';
        formData.append('file', blob, fileName);
        return this.http.post(url, formData, {
            responseType: 'text',
            reportProgress: true,
            observe: 'events'
        });
    }

    private dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        let byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        } else {
            byteString = unescape(dataURI.split(',')[1]);
        }
        // separate out the mime component
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to a typed array
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], {type: mimeString});
    }

}
