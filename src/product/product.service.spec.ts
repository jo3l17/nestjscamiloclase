import { Test, TestingModule } from '@nestjs/testing';
import { CommonModule } from '../common/common.module';
import { ProductRequestDto } from './dto/product-request.dto';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService],
      imports: [CommonModule],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return product.name + 1', async () => {
    const product: ProductRequestDto = {
      name: 'leche',
    };
    const response = await service.createProduct(product);
    expect(response.name).toBe(product.name + ' + 1');
  });
});
