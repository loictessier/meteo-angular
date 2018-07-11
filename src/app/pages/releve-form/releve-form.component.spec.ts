import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleveFormComponent } from './releve-form.component';

describe('ReleveFormComponent', () => {
  let component: ReleveFormComponent;
  let fixture: ComponentFixture<ReleveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
