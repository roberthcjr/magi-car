import { IsOptional, IsString } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsOptional()
  model?: string;
  @IsString()
  @IsOptional()
  brand?: string;
}
