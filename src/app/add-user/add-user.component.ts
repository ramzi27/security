import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import APIS from '../services/api';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    steps: MenuItem[] = [{label: 'Fill User Information'}, {label: 'upload images'}];
    activeIndex = 0;
    imageUrl = '';
    isReadOnly = true;

    ngOnInit() {
    }

    uploadImage(user) {
        if (!user) {
            return;
        }
        const url = localStorage.getItem('serverUrl');
        if (url) {
            this.imageUrl = APIS(url, user).image.upload;
        }
        this.isReadOnly = false;
        this.activeIndex = 1;
    }
}
