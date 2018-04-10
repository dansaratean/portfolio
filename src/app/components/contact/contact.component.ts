import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  contact = {
    name: 'Dan',
    surname: 'Saratean',
    email: 'dansaratean10@gmail.com',
    address: 'Somewhere in Floresti',
    phone: 'xxxxxxxxx',
  };

}
