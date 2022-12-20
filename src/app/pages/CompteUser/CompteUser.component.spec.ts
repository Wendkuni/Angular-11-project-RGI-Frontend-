/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompteUserComponent } from './CompteUser.component';

describe('CompteUserComponent', () => {
  let component: CompteUserComponent;
  let fixture: ComponentFixture<CompteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
