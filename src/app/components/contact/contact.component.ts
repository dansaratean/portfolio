import { Component, OnInit, Inject } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, FormGroup, NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';

import { Message } from '../models/message-interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit {

  message: Message = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
    order: 'none'
  };

  isChecked = false;

  constructor(public router: Router, public dialog: MatDialog,
              public http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

      this.http.post("https://formcarry.com/s/rkQpNX86M", {
        Name: form.value.name,
        Email: form.value.email,
        Message: form.value.message,
        Checkbox: form.value.checkbox,
        Order: form.value.order
      }).subscribe(
        res => { console.log(res); },
        err => { console.log(err); }
      )
  }

  openCV():void {
    let dialogRef = this.dialog.open(ContactComponentDialog);
  }

}

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponentDialog {

pdfSrc: string = './assets/files/cv.pdf';

  constructor(
    public dialog: MatDialogRef<ContactComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    close(): void {
      this.dialog.close();
    }
}
