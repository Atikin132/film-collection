import { computed, Injectable, signal } from '@angular/core';
import { Film } from '../interfaces/film.interface';
import { APP_CONFIG } from '../config/api.config';

@Injectable({ providedIn: 'root' })
export class FilmService {
  private readonly FAVORITE_FILMS_KEY = 'favorite_films';

  films = signal<Film[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor() {
    this.loadFilms();
  }

  private get url(): string {
    return APP_CONFIG.useMock ? APP_CONFIG.mockUrl : APP_CONFIG.apiUrl;
  }

  async loadFilms(): Promise<void> {
    this.loading.set(true);
    this.error.set(null);

    try {
      const res = await fetch(this.url);

      if (!res.ok) {
        throw new Error('Failed to load movies');
      }

      const data: Film[] = await res.json();

      const favorites = this.getStoredFavorites();

      const filmsWithFavorites = data.map((film) => ({
        ...film,
        isFavorite: favorites.includes(film.id),
      }));

      this.films.set(filmsWithFavorites);
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.error.set(error.message);
      }
    } finally {
      this.loading.set(false);
    }
  }

  getFilmById(id: number) {
    return this.films().find((film) => film.id === id);
  }

  toggleFavorite(id: number) {
    this.films.update((films) => {
      const updated = films.map((film) =>
        film.id === id ? { ...film, isFavorite: !film.isFavorite } : film,
      );

      const favoriteIds = updated.filter((f) => f.isFavorite).map((f) => f.id);

      this.saveFavorites(favoriteIds);

      return updated;
    });
  }

  favorites = computed(() => this.films().filter((film) => film.isFavorite));

  private getStoredFavorites(): number[] {
    const data = localStorage.getItem(this.FAVORITE_FILMS_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveFavorites(ids: number[]) {
    localStorage.setItem(this.FAVORITE_FILMS_KEY, JSON.stringify(ids));
  }
}
