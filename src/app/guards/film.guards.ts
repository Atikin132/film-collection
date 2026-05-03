import { Film } from '../interfaces/film.interface';
import { hasBooleanProp, hasNumberProp, hasStringProp } from '../utils/has-type-prop';

export function isFilm(obj: unknown): obj is Film {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    hasNumberProp(obj, 'id') &&
    hasStringProp(obj, 'title') &&
    hasNumberProp(obj, 'year') &&
    hasStringProp(obj, 'genre') &&
    hasNumberProp(obj, 'rating') &&
    hasNumberProp(obj, 'duration') &&
    hasStringProp(obj, 'description') &&
    hasStringProp(obj, 'posterUrl') &&
    hasBooleanProp(obj, 'isFavorite')
  );
}

export function isFilmArray(obj: unknown): obj is Film[] {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    Array.isArray(obj) &&
    obj.every((item) => isFilm(item))
  );
}
