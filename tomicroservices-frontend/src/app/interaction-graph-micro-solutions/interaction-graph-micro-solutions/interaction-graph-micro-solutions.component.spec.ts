import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionGraphMicroSolutionsComponent } from './interaction-graph-micro-solutions.component';

describe('InteractionGraphMicroSolutionsComponent', () => {
  let component: InteractionGraphMicroSolutionsComponent;
  let fixture: ComponentFixture<InteractionGraphMicroSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionGraphMicroSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionGraphMicroSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
