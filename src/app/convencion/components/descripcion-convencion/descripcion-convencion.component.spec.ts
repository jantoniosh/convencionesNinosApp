import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionConvencionComponent } from './descripcion-convencion.component';

describe('DescripcionConvencionComponent', () => {
  let component: DescripcionConvencionComponent;
  let fixture: ComponentFixture<DescripcionConvencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionConvencionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionConvencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
