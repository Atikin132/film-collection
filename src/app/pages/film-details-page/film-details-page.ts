import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilmService } from '../../services/films.service';

@Component({
  selector: 'app-film-details-page',
  imports: [RouterLink],
  templateUrl: './film-details-page.html',
  styleUrl: './film-details-page.scss',
})
export class FilmDetailsPage {
  private route = inject(ActivatedRoute);
  private filmService = inject(FilmService);

  private id = computed(() => Number(this.route.snapshot.paramMap.get('id')));

  film = computed(() => this.filmService.getFilmById(this.id()));

  isLoading = this.filmService.loading;

  isNotFound = computed(() => !this.isLoading() && !this.film());
}
