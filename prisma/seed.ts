import { PrismaClient } from '@prisma/client';
import { HashService } from 'src/user/hash.service';
const prisma = new PrismaClient();

const hashService = new HashService();
async function main() {
  const company = await prisma.company.upsert({
    where: { name: 'company' },
    update: {},
    create: {
      name: 'company',
    },
  });
  console.log('Company created', company);
  const branch = await prisma.branch.upsert({
    where: {
      name: 'branch',
    },
    update: {},
    create: {
      name: 'branch',
      companyId: company.id,
    },
  });
  console.log('Branch created', branch);
  const user = await prisma.user.upsert({
    where: { mainPhone: '+998991234567' },
    update: {},
    create: {
      mainPhone: '+998991234567',
      password: await hashService.hash('password'),
      fullName: 'admin',
      passportSeries: 'AA123123',
      branchId: branch.id,
    },
  });
  console.log('User created', user);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
