import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDescModalComponent } from './pokemon-desc-modal.component';

describe('PokemonDescModalComponent', () => {
  let component: PokemonDescModalComponent;
  let fixture: ComponentFixture<PokemonDescModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDescModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDescModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
