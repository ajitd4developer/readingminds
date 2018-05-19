import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingmindsuserDetailComponent } from './readingmindsuser-detail.component';

describe('ReadingmindsuserDetailComponent', () => {
  let component: ReadingmindsuserDetailComponent;
  let fixture: ComponentFixture<ReadingmindsuserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingmindsuserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingmindsuserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
