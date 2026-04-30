import { Component, input } from '@angular/core';
import { Film } from '../../interfaces/film.interface';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<Film>();
}
