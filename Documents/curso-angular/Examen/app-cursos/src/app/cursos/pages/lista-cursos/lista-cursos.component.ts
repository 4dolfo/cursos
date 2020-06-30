import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit, OnDestroy {
  private suscription: Subscription;
  cursos: Curso[];

  constructor(private api: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.suscription = this.api.getCursos()
      .subscribe(
        res => { this.cursos = res; console.log(this.cursos) },
        err => console.log(err)
      );
  }
  ngOnDestroy() {
    this.suscription.unsubscribe();
  }
  goCursoDetail(id: string) {
    this.router.navigate(['/cursos/detalle-curso', id]);

  }
}
