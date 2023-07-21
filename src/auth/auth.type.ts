import { User } from 'src/user/user.entity';

export interface ReqData {
  user: {
    id: User['id'];
    fullName: User['fullName'];
    photo: User['photo'];
    role: User['role'];
    branchId: User['branchId'];
    superAdmin: User['superAdmin'];
  };
}
