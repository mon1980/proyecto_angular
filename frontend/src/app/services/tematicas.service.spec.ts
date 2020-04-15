import { TestBed } from '@angular/core/testing';

import { TematicasService } from './tematicas.service';

describe('TematicasService', () => {
  let service: TematicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TematicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
