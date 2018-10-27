import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private router: Router, private  authService: AuthService) {
    }

    ngOnInit(): void {
        if (this.authService.checkLogin()) {
            this.router.navigate(['/home'], {replaceUrl: true});
        } else {
            this.router.navigate(['/login'], {replaceUrl: true});
        }
    }
}
