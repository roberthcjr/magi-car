import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
  ValidationError,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.isAcceptedType(metatype)) {
      return value;
    }

    const objectToValidate = plainToInstance(metatype, value);
    const errors = await validate(objectToValidate);
    if (this.isThereErrors(errors)) {
      throw new BadRequestException('Validation Errors', { cause: errors });
    }
    return value;
  }

  private isAcceptedType(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

  private isThereErrors(errors: ValidationError[]): boolean {
    return errors.length > 0;
  }
}
