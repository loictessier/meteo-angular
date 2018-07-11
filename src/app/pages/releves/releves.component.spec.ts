import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevesComponent } from './releves.component';

describe('RelevesComponent', () => {
  let component: RelevesComponent;
  let fixture: ComponentFixture<RelevesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelevesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
