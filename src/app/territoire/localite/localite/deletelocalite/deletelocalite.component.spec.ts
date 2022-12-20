import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelocaliteComponent } from './deletelocalite.component';

describe('DeletelocaliteComponent', () => {
  let component: DeletelocaliteComponent;
  let fixture: ComponentFixture<DeletelocaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletelocaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletelocaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
