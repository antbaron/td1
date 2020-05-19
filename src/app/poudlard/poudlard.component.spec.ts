import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoudlardComponent } from './poudlard.component';

describe('PoudlardComponent', () => {
  let component: PoudlardComponent;
  let fixture: ComponentFixture<PoudlardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoudlardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoudlardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
