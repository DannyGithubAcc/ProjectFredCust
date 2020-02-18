import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwmainComponent } from './mwmain.component';

describe('MwmainComponent', () => {
  let component: MwmainComponent;
  let fixture: ComponentFixture<MwmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
