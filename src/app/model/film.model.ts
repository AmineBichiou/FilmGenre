import { Genre } from './genre.model';
export class Film {
    idFilm? : number;
    nomFilm? : string;
    Genre! : Genre;
    rateFilm? : number;
    dateCreation? : Date ;
}
