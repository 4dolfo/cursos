import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { ListaCursosComponent } from './pages/lista-cursos/lista-cursos.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SharedModule } from '../shared/shared.module';
import { CursosServicesModule } from './services/services.module';
import { CursoDetailComponent } from './pages/curso-detail/curso-detail.component';


@NgModule({
  declarations: [CursosComponent, ListaCursosComponent, PrincipalComponent, CursoDetailComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    CursosServicesModule
  ]
})
export class CursosModule { }
