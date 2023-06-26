import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { diskStorage } from 'multer';
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
  STORAGE: diskStorage({
    destination: process.env.MULTER_DEST,
    filename: (req, file, cb) => {
      const name = file.originalname.split('.')[0];
      const ext = file.originalname.split('.')[1];
      // cb(null, `${req.params.id}_${file.originalname}_${Date.now()}`);
      cb(null, `${req.params.id}_${name}_${Date.now()}.${ext}`);
    },
  }),
};
