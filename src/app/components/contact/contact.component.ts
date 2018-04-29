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

  // submitted = false;
  // name: string;
  // email: string;
  // // message: string;
  // option: string;

  // contactForm = new FormGroup({
  //   name: new FormControl(),
  //   // email: new FormControl('', [Validators.required, Validators.email]),
  //   email: new FormControl(),
  //   message: new FormControl(),
  //   checkbox: new FormControl(),
  //   select: new FormControl()
  // });

  constructor(public router: Router, public dialog: MatDialog,
              public http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
      //   this.http.post("https://formspree.io/claudiu.fratila@gmail.com", {
  //     name: form.value.name,
  //     email: form.value.email,
  //     message: form.value.message,
  //     check: form.value.checkbox,
  //     option: form.value.select
  // }).subscribe(
  //     res => { console.log(res); },
  //     err => { console.log(err); }
  //   )

    // this.http.post("https://formspree.io/claudiu.fratila@gmail.com", form.value.name).subscribe(
    //   res => { console.log(res); },
    //   err => { console.log(err); }
    // )
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
