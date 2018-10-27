import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Subscription} from 'rxjs';
import {CameraComponent} from '../../camera/camera.component';
import {GalleryComponent} from '../../gallery/gallery.component';
import {User} from '../../services/user';
import {UserService} from '../../services/user.service';
import {ImageDialogComponent} from './image-dialog/image-dialog.component';
import {MenuEvents} from './tab-content/tab-content.component';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, OnDestroy {
    isDataLoading = true;
    @Input()
    dbType: string;
    users: User[];
    subscription: Subscription;

    constructor(private usersService: UserService,
                public dialog: MatDialog,
    ) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.subscription = this.usersService.getUsers().subscribe(value => {
                this.users = value;
                this.isDataLoading = false;
            });
        }, 5000);
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    onRowClicked($event: MenuEvents, index: number) {
        console.log($event, index);
        const user = this.users[index];
        switch ($event) {
            case MenuEvents.delete:
                this.users.splice(index, 1);
                this.users = [...this.users];
                break;
            case MenuEvents.upload:
                this.dialog.open(ImageDialogComponent, {data: {url: 'asda', user}});
                // todo upload image
                break;
            case MenuEvents.train:
                // todo train
                break;
            case MenuEvents.camera:
                this.dialog.open(CameraComponent, {data: user});
                break;
            case MenuEvents.images:
                this.dialog.open(GalleryComponent, {data: user});
        }
    }
}
