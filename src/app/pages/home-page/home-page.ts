import { Component, inject } from '@angular/core';
import { FilmService } from '../../services/films.service';
import { FilmCard } from '../../components/film-card/film-card';

@Component({
  selector: 'app-home-page',
  imports: [FilmCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  private filmService = inject(FilmService);

  films = this.filmService.films;
}
