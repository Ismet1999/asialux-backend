import { SETTINGS } from 'src/app.utils';
import { CreateBranchDto } from './dto/CreateBranch.dto';
import { PrismaService } from 'src/prisma/prisma.service';

export class BranchService {
  constructor(private prisma: PrismaService) {}

  getAllBranch(query: any) {
    return this.prisma.branch.findMany({
      skip: query.skip || SETTINGS.DEFAULT_SKIP,
      take: query.take || SETTINGS.DEFAULT_TAKE,
      orderBy: query.orderBy || SETTINGS.DEFAULT_ORDER_BY,
    });
  }
  getBranchById(id: string) {
    return this.prisma.branch.findUnique({ where: { id: +id } });
  }

  createBranch(user: CreateBranchDto) {
    return this.prisma.branch.create({ data: user });
  }

  updateBranchById(id: string, body: CreateBranchDto) {
    return this.prisma.branch.update({
      where: { id: +id },
      data: body,
    });
  }

  deleteBranchById(id: string) {
    return this.prisma.branch.delete({ where: { id: +id } });
  }
}
