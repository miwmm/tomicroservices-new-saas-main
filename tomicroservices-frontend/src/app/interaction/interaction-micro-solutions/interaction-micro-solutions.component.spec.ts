import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionMicroSolutionsComponent } from './interaction-micro-solutions.component';

describe('InteractionMicroSolutionsComponent', () => {
  let component: InteractionMicroSolutionsComponent;
  let fixture: ComponentFixture<InteractionMicroSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionMicroSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionMicroSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
