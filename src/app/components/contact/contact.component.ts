import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  contactForm = new FormGroup({
    name: new FormControl(),
    message: new FormControl(),
    checkbox: new FormControl(),
    select: new FormControl()
  });

  isChecked: boolean;

  contact = {
    name: 'dan saratean',
    email: 'dansaratean10@gmail.com',
    address: 'Somewhere in Floresti',
    phone: 'xxxxxxxxx',
  };

  constructor(public router: Router) { }

  ngOnInit() {
  }

  // getErrorMessage() {
  //   return this.contactForm['email'].hasError('required') ? 'You must enter a value' :
  //       this.contactForm['email'].hasError('email') ? 'Not a valid email' : '';
  // }

}
