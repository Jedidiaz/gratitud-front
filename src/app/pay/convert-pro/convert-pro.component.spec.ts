import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertProComponent } from './convert-pro.component';

describe('ConvertProComponent', () => {
  let component: ConvertProComponent;
  let fixture: ComponentFixture<ConvertProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
