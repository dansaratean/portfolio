import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Card } from '../models/card-interface';

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

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(card: Card):void {
    let dialogRef = this.dialog.open(StringArtComponentDialog, {
      data: {
        src: card.src
        }
    });
  }

}

@Component({
  selector: 'app-string-art-dialog',
  templateUrl: './string-art-dialog.component.html',
  styleUrls: ['./string-art.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StringArtComponentDialog {

  constructor(
    public dialog: MatDialogRef<StringArtComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    close(): void {
      this.dialog.close();
    }
}
