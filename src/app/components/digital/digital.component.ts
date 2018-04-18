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
      title: 'Lady in black',
      year: '2015',
    },
    {
      id: 2,
      src: './assets/images/digital/Buddhist.jpg',
      title: 'Buddhist',
      year: '2016'
    },
    {
      id: 3,
      src: './assets/images/digital/Domination.png',
      title: 'Domination',
      year: '2016'
    },
    {
      id: 4,
      src: './assets/images/digital/ToPsy.jpg',
      title: 'Psychotic',
      year: '2016'
    },
    {
      id: 5,
      src: './assets/images/digital/Dancing.jpg',
      title: 'Dancing',
      year: '2015'
    },
    {
      id: 6,
      src: './assets/images/digital/Shell.png',
      title: 'Shell',
      year: '2016'
    },
    {
      id: 7,
      src: './assets/images/digital/Aleahim.jpg',
      title: 'Aleahim',
      year: '2017'
    },
    {
      id: 8,
      src: './assets/images/digital/Godss.jpg',
      title: 'Godss',
      year: '2016'
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
