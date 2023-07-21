import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../../user/user.entity';
import { ReqData } from '../auth.type';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  validate(payload: User): ReqData['user'] {
    return {
      id: payload.id,
      fullName: payload.fullName,
      photo: payload.photo,
      role: payload.role,
      branchId: payload.branchId,
      superAdmin: payload.superAdmin,
    };
  }
}
