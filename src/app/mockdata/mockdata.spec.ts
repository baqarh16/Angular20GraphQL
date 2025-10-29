import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mockdata } from './mockdata';

describe('Mockdata', () => {
  let component: Mockdata;
  let fixture: ComponentFixture<Mockdata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mockdata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mockdata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
