import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Users } from '../users/users.schema';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: Users) {
    return {
      _id: payload._id,
      name: payload.name,
      email: payload.email,
      phone_number: payload.phone_number,
      role: payload.role,
    };
  }
}
