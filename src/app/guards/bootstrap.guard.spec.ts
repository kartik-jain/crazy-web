import { TestBed, async, inject } from '@angular/core/testing';

import { BootstrapGuard } from './bootstrap.guard';

describe('BootstrapGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BootstrapGuard]
    });
  });

  it('should ...', inject([BootstrapGuard], (guard: BootstrapGuard) => {
    expect(guard).toBeTruthy();
  }));
});
