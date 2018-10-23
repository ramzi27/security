import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    color = 'primary';
    mode = 'indeterminate';
    isLoading = true;
    displayedColumns: string[] = ['name', 'age'];
    data = [{name: 'ramzi', age: 18}, {name: 'ramsdcvzi', age: 100}, {name: 'ramasdzi', age: 18}, {name: 'sam', age: 18}];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    openAddUser() {
        this.router.navigate(['/add-user']);
    }

}
