import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatExpansionPanel} from '@angular/material';
import {Router} from '@angular/router';
import {User} from '../../services/user';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    startDate = new Date(1990, 0, 1);
    LIST_TYPES = [{name: 'White List', value: 'whitelist'}, {name: 'Black List', value: 'blacklist'}];
    @ViewChild('f')
    ngForm: NgForm;
    isDone = false;
    @ViewChild('uploadPanel')
    uploadPanel: MatExpansionPanel;
    @Output()
    userEmitter = new EventEmitter<User>();

    constructor(private router: Router, private userService: UserService) {
    }

    ngOnInit() {
    }

    register() {
        const {type, date, name, secretWord, childNo, favoriteCar, favoriteCity} = this.ngForm.controls;
        this.isDone = true;
        const user: User = {
            id: 0,
            dbType: type.value,
            name: name.value,
            imageCount: 0,
            birthDate: date.value,
            favCarType: favoriteCar.value,
            favCity: favoriteCity.value,
            numOfChildren: childNo.value,
            secretWord: secretWord.value
        };

        this.userService.addUser(user).subscribe(value => {
            console.log(value);
            this.userEmitter.emit(value);
            const id = setTimeout(() => {
                this.isDone = false;
                clearTimeout(id);
                this.ngForm.reset();
            }, 30000);
        });

    }

    resetForm() {
        this.isDone = false;
        this.ngForm.reset();
        this.uploadPanel.close();
    }

    close() {
        this.router.navigate(['/home']);
    }

}
