import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagnotComponent } from './pagnot.component';

describe('PagnotComponent', () => {
  let component: PagnotComponent;
  let fixture: ComponentFixture<PagnotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagnotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagnotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
