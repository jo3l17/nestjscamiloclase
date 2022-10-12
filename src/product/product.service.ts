import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { ProductRequestDto } from './dto/product-request.dto';
import { ProductResponseDto } from './dto/product-response.dto';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}
  async getAll() {
    const products = await this.prismaService.product.findMany();
    return products;
  }

  async createProduct(product: ProductRequestDto): Promise<ProductResponseDto> {
    const productCreated = await this.prismaService.product.create({
      data: { name: `${product.name} + 1` },
    });
    return productCreated;
  }
}
