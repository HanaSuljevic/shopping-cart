import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductsListComponent } from './edit-products-list.component';

describe('EditProductsListComponent', () => {
  let component: EditProductsListComponent;
  let fixture: ComponentFixture<EditProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
