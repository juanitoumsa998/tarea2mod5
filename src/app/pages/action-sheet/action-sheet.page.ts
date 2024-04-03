import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public actionSheetButtons= [
  {
    text: 'Eliminar',
    role: 'destructive',
    data:{
      action: 'delete',
    },
  },
  {
    text: 'Buscar',
    data: {
      action: 'share'
    },
  },
  {
    text: 'Cancel',
    role: 'cancel',
    data: {
      action: 'cancel',
    },
  },
];
public actionShee= [
  {
    text: 'eliminar datos',
    role: 'destructive',
    data:{
      action: 'delete',
    }
}
];

}
