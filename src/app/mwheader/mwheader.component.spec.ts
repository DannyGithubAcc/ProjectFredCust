import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwheaderComponent } from './mwheader.component';

describe('MwheaderComponent', () => {
  let component: MwheaderComponent;
  let fixture: ComponentFixture<MwheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
