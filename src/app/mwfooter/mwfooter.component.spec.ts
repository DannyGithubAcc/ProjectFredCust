import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwfooterComponent } from './mwfooter.component';

describe('MwfooterComponent', () => {
  let component: MwfooterComponent;
  let fixture: ComponentFixture<MwfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
