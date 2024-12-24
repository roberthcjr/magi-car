import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarsRepository } from './cars.repository';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(private repository: CarsRepository) {}

  create(newCar: Car) {
    return this.repository.createCar(newCar);
  }

  findAll() {
    return `This action returns all cars`;
  }

  findOne(id: number) {
    return this.repository.car({ id });
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
