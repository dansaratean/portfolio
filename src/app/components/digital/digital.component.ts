import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Card } from '../models/card-interface';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.scss']
})
export class DigitalComponent implements OnInit {

  data = [
    {
      id: 1,
      src: './assets/images/digital/Ink.jpg',
      title: 'lady in black',
      year: '2015',
      type: 'portret'
    },
    {
      id: 2,
      src: './assets/images/digital/Buddhist.jpg',
      title: 'buddhist',
      year: '2016',
      type: 'portret'
    },
    {
      id: 3,
      src: './assets/images/digital/ToPsy.jpg',
      title: 'psychotic',
      year: '2016',
      type: 'portret'
    },
    {
      id: 4,
      src: './assets/images/digital/Domination.png',
      title: 'domination',
      year: '2016',
      type: 'psychedelic'
    },
    {
      id: 5,
      src: './assets/images/digital/Dancing.jpg',
      title: 'dancing',
      year: '2015',
      type: 'psychedelic'
    },
    {
      id: 6,
      src: './assets/images/digital/Shell.png',
      title: 'shell',
      year: '2016',
      type: 'psychedelic'
    },
    {
      id: 7,
      src: './assets/images/digital/Aleahim.jpg',
      title: 'aleahim',
      year: '2017',
      type: 'psychedelic'
    },
    {
      id: 8,
      src: './assets/images/digital/Godss.jpg',
      title: 'godss',
      year: '2016',
      type: 'psychedelic'
    }
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(card: Card):void {
    let dialogRef = this.dialog.open(DigitalComponentDialog, {
      data: {
        src: card.src
        }
    });
  }
}

@Component({
  selector: 'app-digital-dialog',
  templateUrl: './digital-dialog.component.html',
  styleUrls: ['./digital.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DigitalComponentDialog {

  constructor(
    public dialog: MatDialogRef<DigitalComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    close(): void {
      this.dialog.close();
    }
}
