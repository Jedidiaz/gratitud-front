import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontCreatorComponent } from './front-creator.component';

describe('FrontCreatorComponent', () => {
  let component: FrontCreatorComponent;
  let fixture: ComponentFixture<FrontCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
