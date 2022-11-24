import { Genre } from './../model/genre.model';
import { Injectable } from '@angular/core';
import { Film } from '../model/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  Film : Film[] = [];

  filmRecherche : Film[] = []; 
  film! : Film;
  Genre! : Genre[];
  constructor() { 
    this.Genre = [ {idGenre : 1, nomGenre : "Comedy"},
    {idGenre : 2, nomGenre : "Drama"},
    {idGenre : 3, nomGenre : "Action"},
    {idGenre : 4, nomGenre : "fantasy"},
    {idGenre : 5, nomGenre : "science fiction"},
    {idGenre : 6, nomGenre : "Historical"},
    {idGenre : 7, nomGenre : "Horror"},
    {idGenre : 8, nomGenre : "Romance"},
    {idGenre : 9, nomGenre : "Thriller"},
  ];
    this.Film = [
      {idFilm : 1, nomFilm : "The Man from Toronto",Genre : {idGenre : 1, nomGenre : "Comedy"},rateFilm : 3.7, dateCreation : new Date("03/18/2022")},
      {idFilm : 2, nomFilm : "Deep Water",Genre : {idGenre : 2, nomGenre : "Drama"},rateFilm : 2.5, dateCreation : new Date("06/24/2022")},
      {idFilm : 3, nomFilm : "DayShift",Genre : {idGenre : 3, nomGenre : "Action"},rateFilm : 3.9, dateCreation : new Date("08/12/2022")},
    ];
  }
  listeFilm():Film[] {
    return this.Film;
  }
  ajouterFilm( prod: Film){
    this.Film.push(prod);
    }
    supprimerFilm( prod: Film){
      const index = this.Film.indexOf(prod, 0);
      if (index > -1) {
      this.Film.splice(index, 1);
      }
      }
      consulterFilm(id:number): Film{
        this.film = this.Film.find(p => p.idFilm == id)!;
        return this.film;
        }
trierFilm(){
  this.Film = this.Film.sort((n1,n2) => {
  if (n1.idFilm! > n2.idFilm!) {
  return 1;
  }
  if (n1.idFilm! < n2.idFilm!) {
  return -1;
  }
  return 0;
  });
  }
  updateFilm(f:Film)
  {
  // console.log(p);
  this.supprimerFilm(f);
  this.ajouterFilm(f);
  this.trierFilm();
  }
  listeGenre():Genre[] {
    return this.Genre;
    }
    consulterGenre(id:number): Genre{
      return this.Genre.find(gen => gen.idGenre == id)!;
      }
      rechercheGenre(idGenre: number): Film[]{
        this.filmRecherche = [];
       
        this.Film.forEach((cur, index) => {
         if(idGenre == cur.Genre.idGenre) {
             console.log("cur "+cur);
            this.filmRecherche.push(cur);
             }
       });
       return this.filmRecherche;
       }

}
