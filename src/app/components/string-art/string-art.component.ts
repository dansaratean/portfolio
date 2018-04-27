import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-art',
  templateUrl: './string-art.component.html',
  styleUrls: ['./string-art.component.scss']
})
export class StringArtComponent implements OnInit {

  data = [
    {
      id: 1,
      src: './assets/images/string-art/string1.jpg',
      title: 'feathers',
      year: '2015',
      type: '?'
    },
    {
      id: 2,
      src: './assets/images/string-art/string2.jpg',
      title: 'brain',
      year: '2016',
      type: '?'
    },
    {
      id: 3,
      src: './assets/images/string-art/string3.jpg',
      title: 'octopus',
      year: '2016',
      type: '?'
    },
    {
      id: 4,
      src: './assets/images/string-art/string4.jpg',
      title: 'matrix',
      year: '2016',
      type: 'abstract'
    },
    {
      id: 5,
      src: './assets/images/string-art/string5.jpg',
      title: 'bioshock',
      year: '2015',
      type: 'abstract'
    },
    {
      id: 6,
      src: './assets/images/string-art/string6.png',
      title: 'coral',
      year: '2016',
      type: 'abstract'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
