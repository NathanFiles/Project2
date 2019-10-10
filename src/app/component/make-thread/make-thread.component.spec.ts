import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeThreadComponent } from './make-thread.component';

describe('MakeThreadComponent', () => {
  let component: MakeThreadComponent;
  let fixture: ComponentFixture<MakeThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
