import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadGiftComponent } from './load-gift.component';

describe('LoadGiftComponent', () => {
  let component: LoadGiftComponent;
  let fixture: ComponentFixture<LoadGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadGiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
