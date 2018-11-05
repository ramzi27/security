import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FileUpload} from '../../../node_modules/primeng/primeng';
import {UserService} from '../services/user.service';

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

    constructor(private userService: UserService) {
    }

    ngOnInit() {
    }

    removeFile(index) {
        this.fileUploader.remove(null, index);
    }

    async uploadImages(files: File[]) {
        console.log('uploading');
        const images: Blob[] = [];
        files.forEach(value => {
            images.push(value.slice());
        });
        await this.userService.uploadImageFromBlob(images, this.uploadUrl);
    }
}
