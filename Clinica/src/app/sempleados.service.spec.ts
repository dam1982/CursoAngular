import { TestBed } from '@angular/core/testing';

import { SEmpleadosService } from './sempleados.service';

describe('SEmpleadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SEmpleadosService = TestBed.get(SEmpleadosService);
    expect(service).toBeTruthy();
  });
});
