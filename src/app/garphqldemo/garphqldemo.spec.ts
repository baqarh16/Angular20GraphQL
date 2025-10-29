import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Garphqldemo } from './garphqldemo';

describe('Garphqldemo', () => {
  let component: Garphqldemo;
  let fixture: ComponentFixture<Garphqldemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Garphqldemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Garphqldemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
