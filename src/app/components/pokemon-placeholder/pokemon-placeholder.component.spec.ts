import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPlaceholderComponent } from './pokemon-placeholder.component';

describe('PokemonPlaceholderComponent', () => {
  let component: PokemonPlaceholderComponent;
  let fixture: ComponentFixture<PokemonPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
