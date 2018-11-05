import {HttpClient, HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Observable} from 'rxjs';

import APIS from './api';
import {DB_TYPES, User} from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient, private toast: MessageService) {
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
            return this.http.get<User[]>(APIS(url, new User(0, dbType)).users.get);
        }
    }

    public removeUser(user: User) {
        const url = this.getBaseUrl();
        if (url) {
            return this.http.delete(APIS(url, user).users.remove);
        }
    }

    addUser(user: User): Observable<User> {
        const url = this.getBaseUrl();
        if (url) {
            return this.http.post<User>(APIS(url, user).users.add, user);
        }
    }

    public getImageNames(user: User): Observable<string[]> {
        const url = this.getBaseUrl();
        if (!url) {
            return;
        }
        return this.http.get<string[]>(APIS(url, user).image.names);
    }

    public uploadImage(image: string, user: User): Observable<HttpEvent<any>> {
        const formData = new FormData();
        const url = this.getBaseUrl();
        if (!url) {
            return null;
        }
        const blob = this.dataURItoBlob(image);
        const fileName = new Date().getTime() + '.jpeg';
        formData.append('file', blob, fileName);
        return this.http.post(APIS(url, user).image.upload, formData, {
            responseType: 'text',
            reportProgress: true,
            observe: 'events'
        });
    }

    public async uploadImageFromBlob(files: Blob[], uploadUrl: string) {
        const formData = new FormData();
        const url = this.getBaseUrl();
        if (!url) {
            return null;
        }

        let index = 0;
        for (const image of files) {
            const fileName = new Date().getTime() + '.jpeg';
            formData.append('file', image, fileName);
            this.http.post(uploadUrl, formData, {
                responseType: 'text',
                reportProgress: true,
                observe: 'events'
            }).subscribe(
                value => {
                    console.log(index, value);
                    this.toast.add({
                        severity: 'success',
                        id: index,
                        closable: false,
                        summary: 'image ' + index + '/' + files.length,
                        detail: 'image is uploading ...'
                    });
                });
            index++;
            await this.delay();
        }
    }

    private dataURItoBlob(dataURI) {
        let byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        } else {
            byteString = unescape(dataURI.split(',')[1]);
        }
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], {type: mimeString});
    }

    async delay() {
        return new Promise(resolve => setTimeout(resolve, 3000));
    }

    async uploadImages(images: string[], user: User) {
        let index = 0;
        for (const image of images) {
            this.uploadImage(image, user).subscribe(
                value => {
                    console.log(index, value);
                    this.toast.add({
                        severity: 'success',
                        id: index,
                        closable: false,
                        summary: 'image ' + index + '/' + images.length,
                        detail: 'image is uploading ...'
                    });
                });
            index++;
            await this.delay();
        }
    }

}
