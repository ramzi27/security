import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {User} from '../../services/user';
import {UserService} from '../../services/user.service';
import {MenuEvents} from './list-item/list-item.component';

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

    constructor(private usersService: UserService) {
    }

    ngOnInit() {
        this.subscription = this.usersService.getUsers().subscribe(value => {
            this.users = value;
            this.isDataLoading = false;
        });
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
                break;
            case MenuEvents.upload:
                // todo upload image
                break;
            case MenuEvents.train:
                // todo train
                break;
        }
    }
}
