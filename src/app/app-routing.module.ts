import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { FilmComponent } from './film/film.component';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { RechercheGenreComponent } from './recherche-genre/recherche-genre.component';

const routes: Routes = [
  {path: "Film", component : FilmComponent},
  {path: "addFilm", component : AddFilmComponent},
  { path: "", redirectTo: "Film", pathMatch: "full" },
  {path: "updateFilm/:id", component: UpdateFilmComponent},
  {path: "RechercheGenre", component : RechercheGenreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
