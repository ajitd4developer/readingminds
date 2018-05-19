import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingmindsuserListItemComponent } from './readingmindsuser-list-item.component';

describe('ReadingmindsuserListItemComponent', () => {
  let component: ReadingmindsuserListItemComponent;
  let fixture: ComponentFixture<ReadingmindsuserListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingmindsuserListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingmindsuserListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
