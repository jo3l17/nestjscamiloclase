import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../common/prisma/prisma.service';
import { CommonModule } from '../common/common.module';
import { ProductRequestDto } from './dto/product-request.dto';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let prismaService: PrismaService;
  const productUuids = [];

  afterAll(async () => {
    await prismaService.product.deleteMany({
      where: {
        AND: [...productUuids],
      },
    });
  });
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService],
      imports: [CommonModule],
    }).compile();

    service = module.get<ProductService>(ProductService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return product.name + 1', async () => {
    const product: ProductRequestDto = {
      name: 'pollo',
    };
    const response = await service.createProduct(product);
    productUuids.push({ uuid: response.uuid });
    expect(response.name).toBe(product.name + ' + 1');
  });
});
