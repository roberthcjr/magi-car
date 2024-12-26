import { ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ValidationPipe } from './validation.pipe';
import { IsNotEmpty } from 'class-validator';

class TestDTO {
  @IsNotEmpty()
  testVariable1: string;

  @IsNotEmpty()
  testVariable2: string;
}

describe('ValidationPipe', () => {
  let validationPipe: ValidationPipe;

  beforeEach(async () => {
    validationPipe = new ValidationPipe();
  });

  it('Should throw error based on wrong DTO', () => {
    const metadata: ArgumentMetadata = {
      type: 'body',
      metatype: TestDTO,
      data: '',
    };

    expect(
      async () => await validationPipe.transform(<TestDTO>{}, metadata),
    ).rejects.toThrow(BadRequestException);
  });
});
