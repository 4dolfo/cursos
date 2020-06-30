import { ICurso } from '../interfaces/curso.interface';

export class Curso {
    id: string;
    img: string;
    instructor: string;
    progress: number;
    title: string;

    constructor(data: ICurso) {
        console.log(data);
        this.id = data.id;
        this.img = data.img ? data.img : 'Sin imagen';
        this.instructor = data.instructor ? data.instructor : 'Sin instructor';
        this.progress = data.progress ? data.progress : 0;
        this.title = data.title ? data.title : 'Sin title';
    }

}