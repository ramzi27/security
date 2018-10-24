import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FileUpload} from '../../../node_modules/primeng/primeng';

@Component({
    selector: 'app-image-uploader',
    templateUrl: './image-uploader.component.html',
    styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {
    @Input()
    uploadUrl: string;
    @ViewChild('fileUploader')
    fileUploader: FileUpload;

    constructor() {
    }

    ngOnInit() {
    }

    removeFile(index) {
        this.fileUploader.remove(null, index);
    }
}
