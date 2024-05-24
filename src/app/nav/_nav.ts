import {Routes} from '@angular/router';
import { NavegacionModel } from '../models/navegacion.model';
import { GESTION_PROCESOS } from './permissions';
export const navItems: NavegacionModel[] = [

   
    {
      name: "Procesos",
      url: 'add_proceso',
      icon: 'icon-drop',
      permiso: GESTION_PROCESOS
    },
  
  
  ];
  
  
  export const routesNav: Routes = [
    // {
    //   path: 'dashboard',
    //   loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
    // },
   
    {
      path: 'add_proceso',
      loadChildren: () => import('../pages/procesos/procesos.module').then(m => m.ProcesosModule)
    },
  
  ];