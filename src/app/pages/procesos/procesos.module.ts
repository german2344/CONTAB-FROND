import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesosRoutingModule } from './procesos-routing.module';
import { ProcesoComponent } from './page/proceso/proceso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcesosListComponent } from './components/procesos-list/procesos-list.component';


@NgModule({
  declarations: [
   ProcesoComponent,
   ProcesosListComponent,
   ProcesoComponent
   

  ],
  imports: [
    CommonModule,
    ProcesosRoutingModule,
    ReactiveFormsModule,
    // NgxPaginationModule,
    // ComunModule,
    // SweetAlert2Module.forChild()
  ]
})
export class ProcesosModule { }
