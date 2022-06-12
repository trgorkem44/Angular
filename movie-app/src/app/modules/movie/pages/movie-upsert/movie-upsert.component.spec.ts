import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieUpsertComponent } from './movie-upsert.component';

describe('MovieUpsertComponent', () => {
  let component: MovieUpsertComponent;
  let fixture: ComponentFixture<MovieUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
