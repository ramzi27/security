import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MatExpansionPanel} from "@angular/material";
import {Router} from "@angular/router";
import {User} from "../../services/user";
import {UserService} from "../../services/user.service";
import {MessagingService} from "../../services/messaging.service";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    startDate = new Date(1990, 0, 1);
    LIST_TYPES = [{name: 'White List', value: 'whitelist'}, {name: 'Black List', value: 'blacklist'}];
    showUpload = false;
    @ViewChild('f')
    ngForm: NgForm;
    isDone = false;
    @ViewChild('uploadPanel')
    uploadPanel: MatExpansionPanel;

    constructor(private router: Router, private userService: UserService, private msgService: MessagingService) {
    }

    ngOnInit() {
    }

    register() {
        const {type, date, name, secretWord, childNo, favoriteCar, favoriteCity} = this.ngForm.controls;
        this.isDone = true;
        const user = new User(name.value, date.value, secretWord.value, 0, childNo.value, 0, favoriteCity.value, favoriteCar.value);
        this.userService.addUser(user, type.value).subscribe(value => {
            this.msgService.showMsg('User Added', 'user was successfully added', 'success');
            console.log(value);
            const id = setTimeout(() => {
                this.isDone = false;
                clearTimeout(id);
                this.ngForm.reset();
            }, 30000);
        });

    }


    getUploadUrl() {
        let url = '';
        const name = this.ngForm.controls.name.value;
        if (name) {
            url = 'http://localhost:5000/images/' + name;
        }
        return url;
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
