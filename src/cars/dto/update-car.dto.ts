import { IsNumber, IsString } from 'class-validator';

export class UpdateCarDto {
  @IsNumber()
  id: number;
  @IsString()
  model?: string;
  @IsString()
  brand?: string;
}
