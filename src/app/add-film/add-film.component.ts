import { FilmService } from './../services/film.service';
import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { Router } from '@angular/router';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  newFilm = new Film();
  Genre! : Genre[];
  newIdGenre! : number;
  newGenre! : Genre;
  constructor(private filmService :FilmService,private router : Router) { }
  addFilm(){
    this.newGenre =
    this.filmService.consulterGenre(this.newIdGenre);
    this.newFilm.Genre = this.newGenre;
    this.filmService.ajouterFilm(this.newFilm);
    this.router.navigate(['Film']);
  }
  ngOnInit(): void {
    this.Genre = this.filmService.listeGenre();
  }

}
