import { UpdateFilmComponent } from './update-film/update-film.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { FormsModule } from '@angular/forms';
import { RechercheGenreComponent } from './recherche-genre/recherche-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    AddFilmComponent,
    UpdateFilmComponent,
    RechercheGenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
