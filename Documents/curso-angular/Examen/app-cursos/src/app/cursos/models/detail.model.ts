import { ICurso } from '../interfaces/curso.interface';
import { IDetail } from '../interfaces/detail.interface';

export class Detail {
    classes: string[];
    section: string;
    title: string;

    constructor(data: IDetail) {
        console.log("->" + JSON.stringify(data));
        this.classes = data.classes;
        this.section = data.section ? data.section : 'Sin section';
        this.title = data.title ? data.title : 'Sin title';
    }

}