import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIndexComponent } from './add-index.component';

describe('AddIndexComponent', () => {
  let component: AddIndexComponent;
  let fixture: ComponentFixture<AddIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
