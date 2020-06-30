
import { Curso } from './curso.model';
import { ICurso } from '../interfaces/curso.interface';
import { IDetail } from '../interfaces/detail.interface';
import { Detail } from './detail.model';

export class Parser {

    static cursos(data: ICurso[]): Curso[] {
        if (data) {
            return data.map(iCurso => new Curso(iCurso));
        }

        return [];
    }

    static detalle(data: IDetail[]): Detail[] {
        if (data) {
            return data.map(iDetail => new Detail(iDetail));
        }

        return [];
    }

}