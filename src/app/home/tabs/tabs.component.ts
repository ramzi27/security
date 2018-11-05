import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {Subscription} from 'rxjs';
import {CameraComponent} from '../../camera/camera.component';
import {GalleryComponent} from '../../gallery/gallery.component';
import {DB_TYPES, User} from '../../services/user';
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
    dbType: DB_TYPES;
    users: User[];
    tableDataSource: MatTableDataSource<User>;
    subscription: Subscription;

    constructor(private usersService: UserService,
                public dialog: MatDialog,
    ) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.subscription = this.usersService.getUsers(this.dbType).subscribe(value => {
                this.users = value.map(user => {
                    user.dbType = this.dbType;
                    return user;
                });
                this.tableDataSource = new MatTableDataSource(value);
                this.isDataLoading = false;
            });
        }, 0);
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
                this.usersService.removeUser(user).subscribe(value => console.log(value));
                this.tableDataSource = new MatTableDataSource(this.users);
                break;
            case MenuEvents.upload:
                this.dialog.open(ImageDialogComponent, {data: user});
                break;
            case MenuEvents.camera:
                this.dialog.open(CameraComponent, {data: user});
                break;
            case MenuEvents.images:
                this.dialog.open(GalleryComponent, {data: user});
        }
    }
}
