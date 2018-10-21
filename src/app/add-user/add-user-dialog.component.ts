import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MatDialogRef} from "@angular/material";
import {FileUpload, MessageService} from "primeng/primeng";

@Component({
  selector: 'add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialog implements OnInit {
    startDate = new Date(1990, 0, 1);
    LIST_TYPES = [{name: "White List", value: "whiteList"},{name: "Black List", value: "blackList"}];
    showUpload = false;
    @ViewChild('f')
    ngForm: NgForm;
    @ViewChild('fileUploader')
    fileUploader: FileUpload;
  constructor(public dialogRef: MatDialogRef<AddUserDialog>,private messageService: MessageService) { }

  ngOnInit() {
  }

  register() {
    const {type,date,name,secretWord} = this.ngForm.controls;
    this.messageService.add({key: "key0", severity: 'success', summary: 'User Added' , detail: 'User Was Added Successfully'})
  }

    closeDialog() {
        this.dialogRef.close();
        this.messageService.clear();
    }

    getUploadUrl() {
      let url = "";
        const name = this.ngForm.controls.name.value;
        if(name) {
            url = "http://localhost:5000/images/" + name;
        }
        return url;
    }

    removeFile(index) {
      this.fileUploader.remove(null,index);
    }

}
