import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatoresComponent } from './creatores.component';

describe('CreatoresComponent', () => {
  let component: CreatoresComponent;
  let fixture: ComponentFixture<CreatoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
