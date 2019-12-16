import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellsListComponent } from './wells-list.component';

describe('WellsListComponent', () => {
  let component: WellsListComponent;
  let fixture: ComponentFixture<WellsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
