import { Test, TestingModule } from '@nestjs/testing';
import { CarsRepository } from './cars.repository';
import { PrismaService } from 'src/prisma/prisma.service';

describe('CarsRepository', () => {
  let repository: CarsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsRepository, PrismaService],
    }).compile();

    repository = module.get<CarsRepository>(CarsRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
