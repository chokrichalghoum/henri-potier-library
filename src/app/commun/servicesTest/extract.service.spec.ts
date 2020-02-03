import { TestBed, async, inject } from '@angular/core/testing';
import { ExtractService } from '../services/ExtractService.service';
import { HttpTestingController } from '@angular/common/http/testing';

describe('ExtractService', () => {
  let service;

  // Injection de module de test
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtractService, HttpTestingController],
    });
  });

  beforeEach(inject([ExtractService, HttpTestingController], (conf: ExtractService) => {
    service = conf;
  }));

  it('should return label substr when text < 200', () => {
    const mockText = 'Henri Potier library';
    const result = service.extractDescription(mockText);
    expect(result).toBe(mockText);
  });
});
