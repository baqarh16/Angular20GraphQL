import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apidata } from './apidata';

describe('Apidata', () => {
  let component: Apidata;
  let fixture: ComponentFixture<Apidata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apidata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apidata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
