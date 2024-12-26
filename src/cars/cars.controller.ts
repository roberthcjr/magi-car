import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  create(@Body(ValidationPipe) newCar: Car) {
    return this.carsService.create(newCar);
  }

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string): Promise<Car | null> {
    return this.carsService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body(ValidationPipe) updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(Number(id), updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.carsService.remove(Number(id));
  }
}
