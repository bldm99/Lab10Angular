import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperpuestoComponent } from './superpuesto.component';

describe('SuperpuestoComponent', () => {
  let component: SuperpuestoComponent;
  let fixture: ComponentFixture<SuperpuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperpuestoComponent]
    });
    fixture = TestBed.createComponent(SuperpuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
