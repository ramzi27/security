import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../services/user';
import {UserService} from '../services/user.service';
import {Image} from './image.model';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    isDataLoading = true;
    images: Image[];
    user: User;

    constructor(public matDialogRef: MatDialogRef<GalleryComponent>,
                @Inject(MAT_DIALOG_DATA) public matData: User,
                private userService: UserService
    ) {
    }

    ngOnInit() {
        this.userService.getImages().subscribe(value => {
            this.images = value;
            this.isDataLoading = false;
        });
    }

}
