import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVacunaComponent } from './formulario-vacuna.component';

describe('FormularioVacunaComponent', () => {
  let component: FormularioVacunaComponent;
  let fixture: ComponentFixture<FormularioVacunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioVacunaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioVacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
