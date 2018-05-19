import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingmindsuserListComponent } from './readingmindsuser-list.component';

describe('ReadingmindsuserListComponent', () => {
  let component: ReadingmindsuserListComponent;
  let fixture: ComponentFixture<ReadingmindsuserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingmindsuserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingmindsuserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
