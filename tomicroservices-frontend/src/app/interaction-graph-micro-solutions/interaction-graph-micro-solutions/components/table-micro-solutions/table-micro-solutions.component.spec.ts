import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMicroSolutionsComponent } from './table-micro-solutions.component';

describe('TableMicroSolutionsComponent', () => {
  let component: TableMicroSolutionsComponent;
  let fixture: ComponentFixture<TableMicroSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMicroSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMicroSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
