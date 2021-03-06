import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {User} from '../../../services/user';

export enum MenuEvents {
    delete,
    upload,
    camera,
    images
}


@Component({
    selector: 'app-tab-content',
    templateUrl: './tab-content.component.html',
    styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit {
    displayedColumns = ['id', 'name', 'birthDate', 'secretWord', 'imageCount', 'menu'];
    @Input()
    usersDataSource: MatTableDataSource<User>;
    @Output()
    menuClick: EventEmitter<any> = new EventEmitter();
    menuEvents = MenuEvents;

    constructor() {
    }

    ngOnInit() {
    }

    menuClicked(event: MenuEvents, index: number) {
        this.menuClick.emit({event, index});
    }

    public filterUsers(name: string) {
        this.usersDataSource.filter = name.trim().toLowerCase();
    }

}
