import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialRetirosComponent } from './historial-retiros.component';

describe('HistorialRetirosComponent', () => {
  let component: HistorialRetirosComponent;
  let fixture: ComponentFixture<HistorialRetirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialRetirosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialRetirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
