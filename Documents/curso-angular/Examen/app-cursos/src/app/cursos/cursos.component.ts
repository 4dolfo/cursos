import { Component, OnInit } from '@angular/core';
import { HeaderOption } from '../shared/components/header/header.interface';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  title = 'Galaxy cursos';
  mainUrl = '/cursos';
  headerOptions: HeaderOption[] = [
    { url: '/cursos/principal', title: 'Principal' },
    { url: '/cursos/listar-cursos', title: 'Lista de cursos' }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
