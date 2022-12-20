import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuneEditComponent } from './commune-edit.component';

describe('CommuneEditComponent', () => {
  let component: CommuneEditComponent;
  let fixture: ComponentFixture<CommuneEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommuneEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
