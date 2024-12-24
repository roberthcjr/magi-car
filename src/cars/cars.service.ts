import { Injectable } from '@nestjs/common';
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
    return this.repository.cars({});
  }

  findOne(id: number) {
    return this.repository.car({ id });
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return this.repository.updateCar({ where: { id }, data: updateCarDto });
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
