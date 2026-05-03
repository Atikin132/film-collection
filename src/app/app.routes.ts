import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { FilmDetailsPage } from './pages/film-details-page/film-details-page';
import { AboutPage } from './pages/about-page/about-page';
import { UnknownPage } from './pages/unknown-page/unknown-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'home/film/:id',
    component: FilmDetailsPage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path: '**',
    component: UnknownPage,
  },
];
