import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from "@angular/material";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private router: Router, public matDialog: MatDialog) {
    }

    ngOnInit() {
    }

    openAddUser() {
        this.router.navigate(['/add-user']);
    }

}
