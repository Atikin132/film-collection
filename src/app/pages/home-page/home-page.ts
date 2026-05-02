import { Component, computed, inject, signal } from '@angular/core';
import { FilmService } from '../../services/films.service';
import { FilmCard } from '../../components/film-card/film-card';
import { Search } from '../../components/search/search';

@Component({
  selector: 'app-home-page',
  imports: [FilmCard, Search],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  private filmService = inject(FilmService);

  search = signal('');

  films = this.filmService.films;

  filteredFilms = computed(() => {
    const query = this.search().toLowerCase().trim();

    if (!query) {
      return this.films();
    }

    return this.films().filter((film) => film.title.toLowerCase().includes(query));
  });

  onSearchChange(value: string) {
    this.search.set(value);
  }
}
