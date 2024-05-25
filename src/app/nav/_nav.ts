import { Routes } from '@angular/router';
import { NavegacionModel } from '../models/navegacion.model';
import { GESTION_PROCESOS } from './permissions';
export const navItems: NavegacionModel[] = [
  {
    name: "Procesos",
    url: 'procesos',
    iconComponent: { name: 'cil-drop' },
    permiso: GESTION_PROCESOS
  },
];
export const routesNav: Routes = [
 
  {
    path: 'add_proceso',
    loadChildren: () => import('../pages/procesos/procesos.module').then(m => m.ProcesosModule)
  },
  
];
