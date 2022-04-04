import { TestBed } from '@angular/core/testing';

import { MiIndicadorService } from './mi-indicador.service';

describe('MiIndicadorService', () => {
  let service: MiIndicadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiIndicadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
