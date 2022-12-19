import { TestBed } from '@angular/core/testing';

import { ConvencionService } from './convencion.service';

describe('ConvencionService', () => {
  let service: ConvencionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvencionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
