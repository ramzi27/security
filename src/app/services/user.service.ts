import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {User} from "./user";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    users: User[] = [{name: 'ramzi', birthDate: "Aug 02 2018", secretWord: "hig"}, {
        name: 'ramfvdfzi',
        birthDate: "Aug 03 2018",
        secretWord: "hig"
    }]

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
