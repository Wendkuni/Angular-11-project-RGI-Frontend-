import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecommuneComponent } from './deletecommune.component';

describe('DeletecommuneComponent', () => {
  let component: DeletecommuneComponent;
  let fixture: ComponentFixture<DeletecommuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletecommuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
