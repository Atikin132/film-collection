import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailsPage } from './film-details-page';

describe('FilmDetailsPage', () => {
  let component: FilmDetailsPage;
  let fixture: ComponentFixture<FilmDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmDetailsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
