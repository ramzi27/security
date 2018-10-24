import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../services/user";

export enum MenuEvents {
    delete,
    train,
    upload
}

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})


export class ListItemComponent implements OnInit {
    @Input()
    user: User;
    @Input()
    id: number;
    @Output()
    menuClick: EventEmitter<MenuEvents> = new EventEmitter();
    menuEvents = MenuEvents;

    constructor() {
    }

    ngOnInit() {
    }

    menuClicked(event: MenuEvents) {
        this.menuClick.emit(event);
    }


}
