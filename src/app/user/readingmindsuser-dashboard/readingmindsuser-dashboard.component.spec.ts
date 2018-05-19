import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingmindsuserDashboardComponent } from './readingmindsuser-dashboard.component';

describe('ReadingmindsuserDashboardComponent', () => {
  let component: ReadingmindsuserDashboardComponent;
  let fixture: ComponentFixture<ReadingmindsuserDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingmindsuserDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingmindsuserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
