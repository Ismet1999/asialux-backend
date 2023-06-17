import { HttpStatus, ValidationPipe } from '@nestjs/common';
const VALIDATION_PIPE = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
});

export const SETTINGS = {
  VALIDATION_PIPE,
  DEFAULT_SKIP: 0,
  DEFAULT_TAKE: 10,
  DEFAULT_ORDER_BY: 'created_at:desc',

  EXCLUDE_FIELDS: '-created_at -updated_at -__v',
  SORT_DEFAULT: {
    created_at: -1,
  },
};
