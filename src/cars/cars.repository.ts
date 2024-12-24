import { Injectable } from '@nestjs/common';
import { Cars, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Car } from './entities/car.entity';

type QueryType = {
  skip?: number;
  take?: number;
  cursor?: Prisma.CarsWhereUniqueInput;
  where?: Prisma.CarsWhereInput;
  orderBy?: Prisma.CarsOrderByWithRelationInput;
};

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

  async cars(params: QueryType): Promise<Car[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.cars.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createCar(data: Prisma.CarsCreateInput): Promise<Cars> {
    return this.prisma.cars.create({
      data,
    });
  }
}
