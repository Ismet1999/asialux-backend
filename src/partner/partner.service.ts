import { SETTINGS } from 'src/app.utils';
import { CreatePartnerDto } from './dto/CreatePartner.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdatePartnerDto } from './dto/UpdatePartner.dto';

@Injectable()
export class PartnerService {
  constructor(private prisma: PrismaService) {}

  getAllPartner(query: any) {
    return this.prisma.partner.findMany();
  }
  getPartnerById(id: string) {
    return this.prisma.partner.findUnique({ where: { id } });
  }

  createPartner(partner: CreatePartnerDto) {
    return this.prisma.partner.create({ data: partner });
  }

  updatePartnerById(id: string, body: UpdatePartnerDto) {
    return this.prisma.partner.update({
      where: { id },
      data: body,
    });
  }

  deletePartnerById(id: string) {
    return this.prisma.partner.delete({ where: { id } });
  }
}
