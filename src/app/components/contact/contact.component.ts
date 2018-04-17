import { Component, OnInit, Inject } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl, Validators, ReactiveFormsModule, FormGroup, NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(),
    // email: new FormControl('', [Validators.required, Validators.email]),
    email: new FormControl(),
    message: new FormControl(),
    checkbox: new FormControl(),
    select: new FormControl()
  });

  contact = {
    name: 'dan saratean',
    email: 'dansaratean10@gmail.com',
    address: 'Somewhere in Floresti',
    phone: 'xxxxxxxxx',
  };

  isChecked = false;

  constructor(public router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onSubmit() {
    // this.submitted = true;

    // console.log(this.name);
    // console.log(this.email);
    // console.log(this.message);
    // console.log(this.isChecked);
    // console.log(this.option);
    // console.log('FORM.VALUE: ' + form.value.name);
    // this.user.name = form.value.contactForm.name;
    //
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
