import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    users: User[] = [{id: 1, name: 'ramzi', birthDate: 'Aug 02 2018', secretWord: 'hig', imageCount: 20}, {
        name: 'ramfvdfzi',
        birthDate: 'Aug 03 2018',
        secretWord: 'hig',
        id: 2,
        imageCount: 10
    }];

    constructor(private http: HttpClient) {

    }

    public getUsers(): Observable<User[]> {
        return of(this.users);
    }

    public train(user: User) {

    }

    public remove(user: User) {

    }

}
