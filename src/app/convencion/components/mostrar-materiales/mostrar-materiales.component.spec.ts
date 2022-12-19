import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMaterialesComponent } from './mostrar-materiales.component';

describe('MostrarMaterialesComponent', () => {
  let component: MostrarMaterialesComponent;
  let fixture: ComponentFixture<MostrarMaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarMaterialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
