import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpStatus } from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { Book } from '../dto/book.dto';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: Book, metadata: ArgumentMetadata) {
    console.log("value === ", value);
    const { error } = this.schema.validate(value)
    if (error) {
        console.log("error === ", error);
      throw new BadRequestException(error.message)
    }
    return value;
  }
}
