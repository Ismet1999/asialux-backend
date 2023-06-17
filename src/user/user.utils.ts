import { HttpStatus, ValidationPipe } from '@nestjs/common';

const VALIDATION_PIPE = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
});

export const SETTINGS = {
  VALIDATION_PIPE,
};

// roles
// admin
// user
// guest
export enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}
