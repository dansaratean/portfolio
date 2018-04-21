import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Card } from '../models/card-interface';


@Component({
  selector: 'app-graphical',
  templateUrl: './graphical.component.html',
  styleUrls: ['./graphical.component.scss']
})
export class GraphicalComponent implements OnInit {

  data = [
    {
      id: 1,
      src: './assets/images/graphical/portret1.jpg',
      title: 'sarai',
      year: '2014',
      type: 'portret'
    },
    {
      id: 2,
      src: './assets/images/graphical/portret2.jpg',
      title: 'artemis',
      year: '2013',
      type: 'portret'
    },
    {
      id: 3,
      src: './assets/images/graphical/portret3.jpg',
      title: 'diana',
      year: '2014',
      type: 'portret'
    },
    {
      id: 4,
      src: './assets/images/graphical/portret4.jpg',
      title: 'suara',
      year: '2017',
      type: 'portret'
    },
    {
      id: 5,
      src: './assets/images/graphical/tupac.jpg',
      title: '2pac',
      year: '2016',
      type: 'portret'
    },
    {
      id: 6,
      src: './assets/images/graphical/taur.jpg',
      title: 'aries',
      year: '2017',
      type: 'free-style'
    },
    {
      id: 7,
      src: './assets/images/graphical/ram.jpg',
      title: 'ram',
      year: '2018',
      type: 'free-style'
    },
    {
      id: 8,
      src: './assets/images/graphical/soare.jpg',
      title: 'sun',
      year: '2017',
      type: 'psychedelic'
    },
    {
      id: 9,
      src: './assets/images/graphical/tunes1.jpg',
      title: 'wild wild west',
      year: '2016',
      type: 'characters'
    },
    {
      id: 10,
      src: './assets/images/graphical/tunes2.jpg',
      title: 'tom & jerry',
      year: '2016',
      type: 'characters'
    },
    {
      id: 11,
      src: './assets/images/graphical/tunes3.jpg',
      title: 'love',
      year: '2016',
      type: 'characters'
    },
    {
      id: 12,
      src: './assets/images/graphical/graf1.jpg',
      title: 'hydro_1',
      year: '2016',
      type: 'grafitti'
    },
    {
      id: 13,
      src: './assets/images/graphical/graf2.jpg',
      title: 'hydro_2',
      year: '2016',
      type: 'grafitti'
    },
    {
      id: 14,
      src: './assets/images/graphical/graf3.jpg',
      title: 'bliss',
      year: '2016',
      type: 'grafitti'
    },
    {
      id: 15,
      src: './assets/images/graphical/Collage.jpg',
      title: 'characters',
      year: '2017',
      type: 'characters'
    },
    {
      id: 16,
      src: './assets/images/graphical/SubstanceKiller.jpg',
      title: 'substance Killer',
      year: '2016',
      type: 'psychedelic'
    }
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(card: Card):void {
    let dialogRef = this.dialog.open(GraphicalComponentDialog, {
      data: {
        src: card.src
        }
    });
  }

}

@Component({
  selector: 'app-graphical-dialog',
  templateUrl: './graphical-dialog.component.html',
  styleUrls: ['./graphical.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class GraphicalComponentDialog {

  constructor(
    public dialog: MatDialogRef<GraphicalComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    close(): void {
      this.dialog.close();
    }
}
