import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from './cars.service';
import { PrismaService } from '../prisma/prisma.service';
import { CarsRepository } from './cars.repository';

describe('CarsService', () => {
  let service: CarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsService, CarsRepository, PrismaService],
    }).compile();

    service = module.get<CarsService>(CarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
