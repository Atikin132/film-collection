import { Component, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { FilmService } from '../../services/films.service';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {
  private router = inject(Router);
  private filmService = inject(FilmService);

  private url = signal(this.router.url);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url.set(event.urlAfterRedirects);
      }
    });
  }

  breadcrumbs = computed(() => {
    const url = this.url();

    if (url === '/home') {
      return [{ label: 'Home', url: '/home' }];
    }

    if (url === '/about') {
      return [{ label: 'About', url: '/about' }];
    }

    if (url.startsWith('/home/film/')) {
      const id = Number(url.split('/')[3]);
      const film = this.filmService.getFilmById(id);

      return [
        { label: 'Home', url: '/home' },
        { label: film?.title ?? 'Film', url: url },
      ];
    }

    return [];
  });
}
