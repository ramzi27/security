import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {User} from '../../services/user';
import {UserService} from '../../services/user.service';
import {MenuEvents} from "./tab-content/tab-content.component";
import {MatDialog} from "@angular/material";
import {ImageDialogComponent} from "./image-dialog/image-dialog.component";

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

    constructor(private usersService: UserService, public dialog: MatDialog) {
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
        this.subscription.unsubscribe();
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
                this.dialog.open(ImageDialogComponent, {data: {url: user.name}});
                // todo upload image
                break;
            case MenuEvents.train:
                // todo train
                break;
        }
    }
}
