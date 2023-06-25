import { SETTINGS } from 'src/app.utils';
import { CreateCompanyDto } from './dto/CreateCompany.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdateCompanyDto } from './dto/UpdateCompany.dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  getAllCompany(query: any) {
    return this.prisma.company.findMany();
  }
  getCompanyById(id: string) {
    return this.prisma.company.findUnique({ where: { id } });
  }

  createCompany(company: CreateCompanyDto) {
    return this.prisma.company.create({ data: company });
  }

  updateCompanyById(id: string, body: UpdateCompanyDto) {
    return this.prisma.company.update({
      where: { id },
      data: body,
    });
  }

  deleteCompanyById(id: string) {
    return this.prisma.company.delete({ where: { id } });
  }
}
