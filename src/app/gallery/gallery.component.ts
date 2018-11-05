import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import APIS from '../services/api';
import {User} from '../services/user';
import {UserService} from '../services/user.service';

interface Image {
    source: string;
    alt: string;
    title: string;
}

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    isDataLoading = true;
    images: Image[] = [];
    user: User;

    constructor(public matDialogRef: MatDialogRef<GalleryComponent>,
                @Inject(MAT_DIALOG_DATA) public matData: User,
                private userService: UserService
    ) {
        this.user = matData;
    }

    ngOnInit() {
        this.userService.getImageNames(this.user).subscribe(value => {
            const url = this.userService.getBaseUrl();
            if (!url) {
                return;
            }
            value.forEach(image => {
                this.images.push({source: APIS(url, this.user).image.get + image, alt: this.user.name, title: image});
            });
            console.log(this.images);
            this.isDataLoading = false;
        });
    }

}
