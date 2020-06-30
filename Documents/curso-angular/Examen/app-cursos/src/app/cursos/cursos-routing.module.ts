import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ListaCursosComponent } from './pages/lista-cursos/lista-cursos.component';
import { CursoDetailComponent } from './pages/curso-detail/curso-detail.component';


const routes: Routes = [
  {
    path: '',
    component: CursosComponent,
    children: [
      { path: '', redirectTo: 'principal', pathMatch: 'full' },
      { path: 'principal', component: PrincipalComponent },
      { path: 'listar-cursos', component: ListaCursosComponent },
      { path: 'detalle-curso/:id', component: CursoDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
