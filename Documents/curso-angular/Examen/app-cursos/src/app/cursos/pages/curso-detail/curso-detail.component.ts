import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Curso } from '../../models/curso.model';
import { Subscription } from 'rxjs';
import { Detail } from '../../models/detail.model';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.scss']
})
export class CursoDetailComponent implements OnInit, OnDestroy {
  details: Detail[];
  suscription: Subscription;

  constructor(private api: ApiService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.suscription = this.api.getCurso(id)
      .subscribe(
        res => { this.details = res },
        err => console.log(err)
      );
  }
  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

}
