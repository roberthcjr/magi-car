import { IsString } from 'class-validator';

export class Car {
  @IsString()
  model: string;
  @IsString()
  brand: string;
}
