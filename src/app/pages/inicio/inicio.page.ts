import { Component, OnInit } from '@angular/core';
interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit{
componentes:Componente[]=[
  
  {
    icon: 'american-football-outline',
    name: 'Action Sheet',
    redirectTo: '/action-sheet'
  },
  {
    icon: 'alert-circle-outline',
    name: 'Alert',
    redirectTo: '/alert'
  },
  {
    icon: 'logo-stackoverFlow',
    name: 'Accordion',
    redirectTo: '/accordion'
  },
  {
    icon: 'badge-icon',
    name: 'Badge',
    redirectTo: '/badge'
  },
  {
    icon: 'beaker-outline',
    name: 'Avatar',
    redirectTo: '/avatar'
  },
  {
    icon: 'fast-food-outline',
    name: 'Breadcrumbs',
    redirectTo: '/breadcrumbs'
  },
  {
    icon: 'radio-button-off-outline',
    name: 'Buttons',
    redirectTo: '/button'
  },
  
];


  ngOnInit() {}


}
