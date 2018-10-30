import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MatExpansionPanel} from "@angular/material";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {CanDeactivateComponent} from "../../services/can-deactivate.guard";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, CanDeactivateComponent {
    startDate = new Date(1990, 0, 1);
    LIST_TYPES = [{name: 'White List', value: 'whiteList'}, {name: 'Black List', value: 'blackList'}];
    showUpload = false;
    @ViewChild('f')
    ngForm: NgForm;
    isDone = false;
    @ViewChild('uploadPanel')
    uploadPanel: MatExpansionPanel;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    register() {
        const {type, date, name, secretWord, childNo, favoriteCar, favoriteCity} = this.ngForm.controls;
        this.isDone = true;
        console.log(this.isDone);
        const id = setTimeout(() => {
            this.isDone = false;
            clearTimeout(id);
            this.ngForm.reset();
        }, 30000);
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

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.ngForm.valid)
            return false;
        return true;
    }


}
