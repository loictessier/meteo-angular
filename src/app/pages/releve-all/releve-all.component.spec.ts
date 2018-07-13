import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleveAllComponent } from './releve-all.component';

describe('ReleveAllComponent', () => {
  let component: ReleveAllComponent;
  let fixture: ComponentFixture<ReleveAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleveAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleveAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
