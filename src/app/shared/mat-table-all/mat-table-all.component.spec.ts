import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableAllComponent } from './mat-table-all.component';

describe('MatTableAllComponent', () => {
  let component: MatTableAllComponent;
  let fixture: ComponentFixture<MatTableAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
