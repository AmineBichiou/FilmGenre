import { Genre } from './../model/genre.model';
import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-recherche-genre',
  templateUrl: './recherche-genre.component.html',
  styleUrls: ['./recherche-genre.component.css']
})
export class RechercheGenreComponent implements OnInit {
  Film : Film[] = [];
  Genre : Genre[] = [];
  IdGenre! : number;
  constructor(private filmService :FilmService) { }

  ngOnInit(): void {
    this.Genre = this.filmService.listeGenre();
    this.Film=this.filmService.listeFilm();
  }
  onChange() {
     this.Film =  this.filmService.rechercheGenre(this.IdGenre);
     console.log(this.Film);
     
     }
     supprimerFilm(f: Film)
{
  let conf = confirm("Etes-vous sûr ?");
   if (conf)
   this.filmService.supprimerFilm(f);
}

}
