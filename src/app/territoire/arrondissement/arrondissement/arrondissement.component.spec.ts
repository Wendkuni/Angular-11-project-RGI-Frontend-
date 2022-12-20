/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArrondissementComponent } from './arrondissement.component';

describe('ArrondissementComponent', () => {
  let component: ArrondissementComponent;
  let fixture: ComponentFixture<ArrondissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrondissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrondissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
