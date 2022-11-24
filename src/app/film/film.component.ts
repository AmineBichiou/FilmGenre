import { FilmService } from './../services/film.service';
import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
    Film : Film[] = [];
  constructor(private filmService :FilmService) { 
    this.Film=filmService.listeFilm();
  }
  supprimerFilm(f: Film)
{
  let conf = confirm("Etes-vous sûr ?");
   if (conf)
   this.filmService.supprimerFilm(f);
}

  ngOnInit(): void {
  }

}
