import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodataviewComponent } from './biodataview.component';

describe('BiodataviewComponent', () => {
  let component: BiodataviewComponent;
  let fixture: ComponentFixture<BiodataviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiodataviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiodataviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
