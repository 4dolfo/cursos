import { Injectable } from '@angular/core';
import { CursosServicesModule } from './services.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso.model';
import { map } from 'rxjs/operators';
import { Parser } from '../models/parser.model';
import { ICurso } from '../interfaces/curso.interface';
import { environment } from 'src/environments/environment';
import { Detail } from '../models/detail.model';
import { IDetail } from '../interfaces/detail.interface';

@Injectable({
  providedIn: CursosServicesModule
})
export class ApiService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.urlService;
  }

  getCursos(): Observable<Curso[]> {

    return this.http.get<ICurso[]>(this.url + 'subjects' + '.json')
      .pipe(
        map((originalResponse) => Parser.cursos(originalResponse))
      );
  }


  getCurso(id: string): Observable<Detail[]> {

    return this.http.get<IDetail[]>(this.url + 'subject/' + id + '.json')
      .pipe(
        map((originalResponse) => Parser.detalle(originalResponse))
      );
  }
}
