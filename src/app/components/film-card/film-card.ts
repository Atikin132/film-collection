import { Component, inject, input } from '@angular/core';
import { Film } from '../../interfaces/film.interface';
import { RouterLink } from '@angular/router';
import { FilmService } from '../../services/films.service';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<Film>();

  private filmService = inject(FilmService);

  toggleFavorite(event: Event) {
    event.stopPropagation();
    this.filmService.toggleFavorite(this.film().id);
  }
}
