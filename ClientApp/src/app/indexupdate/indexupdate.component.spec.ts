import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexUpdateComponent } from './indexupdate.component';

describe('IndexUpdateComponent', () => {
  let component: IndexUpdateComponent;
  let fixture: ComponentFixture<IndexUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
