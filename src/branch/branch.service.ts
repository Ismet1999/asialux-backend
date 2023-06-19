import { SETTINGS } from 'src/app.utils';
import { CreateBranchDto } from './dto/CreateBranch.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdateBranchDto } from './dto/UpdateBranch.dto';

@Injectable()
export class BranchService {
  constructor(private prisma: PrismaService) {}

  getAllBranch(query: any) {
    return this.prisma.branch.findMany();
  }
  getBranchById(id: string) {
    return this.prisma.branch.findUnique({ where: { id } });
  }

  createBranch(branch: CreateBranchDto) {
    return this.prisma.branch.create({ data: branch });
  }

  updateBranchById(id: string, body: UpdateBranchDto) {
    return this.prisma.branch.update({
      where: { id },
      data: body,
    });
  }

  deleteBranchById(id: string) {
    return this.prisma.branch.delete({ where: { id } });
  }
}
