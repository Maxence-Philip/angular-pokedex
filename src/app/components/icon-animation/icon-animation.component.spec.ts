import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAnimationComponent } from './icon-animation.component';

describe('IconAnimationComponent', () => {
  let component: IconAnimationComponent;
  let fixture: ComponentFixture<IconAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
