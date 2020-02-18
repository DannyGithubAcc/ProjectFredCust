import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwnavComponent } from './mwnav.component';

describe('MwnavComponent', () => {
  let component: MwnavComponent;
  let fixture: ComponentFixture<MwnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
