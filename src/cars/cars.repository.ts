import { Injectable } from '@nestjs/common';
import { Cars, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarsRepository {
  constructor(private prisma: PrismaService) {}

  async car(
    carWhereUniqueInput: Prisma.CarsWhereUniqueInput,
  ): Promise<Cars | null> {
    return this.prisma.cars.findUnique({
      where: carWhereUniqueInput,
    });
  }

  async createCar(data: Prisma.CarsCreateInput): Promise<Cars> {
    return this.prisma.cars.create({
      data,
    });
  }
}
