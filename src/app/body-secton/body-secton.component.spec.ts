import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySectonComponent } from './body-secton.component';

describe('BodySectonComponent', () => {
  let component: BodySectonComponent;
  let fixture: ComponentFixture<BodySectonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodySectonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodySectonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
