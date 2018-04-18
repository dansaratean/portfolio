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
      title: 'Sarai',
      year: '2014',
    },
    {
      id: 2,
      src: './assets/images/graphical/portret2.jpg',
      title: 'Artemis',
      year: '2013'
    },
    {
      id: 3,
      src: './assets/images/graphical/portret3.jpg',
      title: 'Diana',
      year: '2014'
    },
    {
      id: 4,
      src: './assets/images/graphical/portret4.jpg',
      title: 'Suara',
      year: '2017'
    },
    {
      id: 5,
      src: './assets/images/graphical/tupac.jpg',
      title: '2pac',
      year: '2016'
    },
    {
      id: 6,
      src: './assets/images/graphical/taur.jpg',
      title: 'Aries',
      year: '2017'
    },
    {
      id: 7,
      src: './assets/images/graphical/soare.jpg',
      title: 'Sun',
      year: '2017'
    },
    {
      id: 8,
      src: './assets/images/graphical/tunes1.jpg',
      title: 'Wild Wild West',
      year: '2016'
    },
    {
      id: 9,
      src: './assets/images/graphical/tunes2.jpg',
      title: 'Tom & Jerry',
      year: '2016'
    },
    {
      id: 10,
      src: './assets/images/graphical/tunes3.jpg',
      title: 'Love',
      year: '2016'
    },
    {
      id: 11,
      src: './assets/images/graphical/graf1.jpg',
      title: 'Hydro_1',
      year: '2016'
    },
    {
      id: 12,
      src: './assets/images/graphical/graf2.jpg',
      title: 'Hydro_2',
      year: '2016'
    },
    {
      id: 13,
      src: './assets/images/graphical/graf3.jpg',
      title: 'Bliss',
      year: '2016'
    },
    {
      id: 14,
      src: './assets/images/graphical/Collage.jpg',
      title: 'Characters',
      year: '2017'
    },
    {
      id: 15,
      src: './assets/images/graphical/SubstanceKiller.jpg',
      title: 'Substance Killer',
      year: '2016'
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
