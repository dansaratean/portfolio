import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.scss']
})
export class DigitalComponent implements OnInit {

  data = [
    { src: './assets/images/digital/Ink.jpg',
      name: '',
      title: 'Lady in black',
    },
    {
      src: './assets/images/digital/Buddhist.jpg',
      name: '',
      title: 'Buddhist'
    },
    {
      src: './assets/images/digital/Domination.png',
      name: '',
      title: 'Domination'
    },
    {
      src: './assets/images/digital/ToPsy.jpg',
      name: '',
      title: 'Psychotic'
    },
    {
      src: './assets/images/digital/Dancing.jpg',
      name: '',
      title: 'Dancing'
    },
    {
      src: './assets/images/digital/dd.png',
      name: '',
      title: 'Shell'
    },
    {
      src: './assets/images/digital/Aleahim.jpg',
      name: '',
      title: 'Aleahim'
    },
    {
      src: './assets/images/digital/Godss.jpg',
      name: '',
      title: 'Godss'
    },
    {
      src: './assets/images/digital/SubstanceKiller.jpg',
      name: '',
      title: 'SubstanceKiller'
    },
    {
      src: './assets/images/digital/Collage.jpg',
      name: '',
      title: 'Collage'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
