import { TestBed } from '@angular/core/testing';

import { AuthGuard1Service } from './auth-guard1.service';

describe('AuthGuard1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuard1Service = TestBed.get(AuthGuard1Service);
    expect(service).toBeTruthy();
  });
});
