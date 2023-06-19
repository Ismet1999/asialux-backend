import { SETTINGS } from 'src/app.utils';
import { CreateCurrencyDto } from './dto/CreateCurrency.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdateCurrencyDto } from './dto/UpdateCUrrency.dto';

@Injectable()
export class CurrencyService {
  constructor(private prisma: PrismaService) {}

  getAllCurrency(query: any) {
    return this.prisma.currency.findMany();
  }
  getCurrencyById(id: string) {
    return this.prisma.currency.findUnique({ where: { id: +id } });
  }

  createCurrency(currency: CreateCurrencyDto) {
    return this.prisma.currency.create({ data: currency });
  }

  updateCurrencyById(id: string, body: UpdateCurrencyDto) {
    return this.prisma.currency.update({
      where: { id: +id },
      data: body,
    });
  }

  deleteCurrencyById(id: string) {
    return this.prisma.currency.delete({ where: { id: +id } });
  }
}
