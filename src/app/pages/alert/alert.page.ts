import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl:AlertController) { }

  ngOnInit() {
  }
alertButtons=['action'];
async presentAlert(){
  const alert=await this.alertCtrl.create({
    header:'Un titulo corto es el mejor',
    subHeader: 'Un subtitulo siempre es opcional',
    message: 'Un mensaje especifico explica cual es el problema de la alerta',
    buttons: ['action']
  });
  await alert.present();
};
async presAl(){
  const aler=await this.alertCtrl.create({
    header: 'prueba segundo boton',
    message:'se comprobo que funciona el segundo boton',
    buttons:['action']
  });
  await aler.present();
};
public alertButton=[
  {
    text: 'Cancelar',
    role: 'cancelado',
    handler: () => {
      console.log('Alerta Confirmada');
    },
  },
  {
    text: 'Acepto',
    role: 'confirmacion positiva',
    handler: () => {
      console.log('Alerta confirmada positiva');
    },
  },
];
setResult(ev:any){
  console.log(`el resultado de la alerta es: ${ev.detail.role}`);
};

}
