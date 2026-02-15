import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiseUiComponent } from './practise-ui.component';

describe('PractiseUiComponent', () => {
  let component: PractiseUiComponent;
  let fixture: ComponentFixture<PractiseUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PractiseUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractiseUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
