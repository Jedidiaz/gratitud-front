import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsComponent } from './pros.component';

describe('ProsComponent', () => {
  let component: ProsComponent;
  let fixture: ComponentFixture<ProsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
