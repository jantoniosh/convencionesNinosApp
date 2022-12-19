import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdpdComponent } from './cdpd.component';

describe('CdpdComponent', () => {
  let component: CdpdComponent;
  let fixture: ComponentFixture<CdpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdpdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
