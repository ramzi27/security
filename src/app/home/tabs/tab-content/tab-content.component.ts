import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../services/user';

export enum MenuEvents {
    delete,
    train,
    upload
}


@Component({
    selector: 'app-tab-content',
    templateUrl: './tab-content.component.html',
    styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit {
    displayedColumns = ['id', 'name', 'birthDate', 'secretWord', 'imageCount', 'menu'];
    @Input()
    users: User[];
    @Output()
    menuClick: EventEmitter<any> = new EventEmitter();
    menuEvents = MenuEvents;

    constructor() {
    }

    ngOnInit() {
        console.log("table rendered");
    }

    menuClicked(event: MenuEvents, index: number) {
        this.menuClick.emit({event, index});
    }

}
