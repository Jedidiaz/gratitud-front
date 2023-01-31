import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSubComponent } from './loading-sub.component';

describe('LoadingSubComponent', () => {
  let component: LoadingSubComponent;
  let fixture: ComponentFixture<LoadingSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
