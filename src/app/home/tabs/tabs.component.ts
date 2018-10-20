import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
    data = [{name: 'ramzi', age: 13}];
    displayedColumns: string[] = ['name', 'age'];

    constructor() {
    }

    ngOnInit() {
    }

}
