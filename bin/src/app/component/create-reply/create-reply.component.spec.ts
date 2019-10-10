import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReplyComponent } from './create-reply.component';

describe('CreateReplyComponent', () => {
  let component: CreateReplyComponent;
  let fixture: ComponentFixture<CreateReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
