import { Injectable } from '@nestjs/common';
import { Cars, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Car } from './entities/car.entity';

type GetAllType = {
  skip?: number;
  take?: number;
  cursor?: Prisma.CarsWhereUniqueInput;
  where?: Prisma.CarsWhereInput;
  orderBy?: Prisma.CarsOrderByWithRelationInput;
};

type UpdateType = {
  where: Prisma.CarsWhereUniqueInput;
  data: Prisma.CarsUpdateInput;
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

  async cars(params: GetAllType): Promise<Car[]> {
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

  async updateCar(params: UpdateType): Promise<Car> {
    const { where, data } = params;
    return this.prisma.cars.update({
      data,
      where,
    });
  }

  async deleteCar(where: Prisma.CarsWhereUniqueInput) {
    return this.prisma.cars.delete({
      where,
    });
  }
}
