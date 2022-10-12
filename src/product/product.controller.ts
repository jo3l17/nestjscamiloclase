import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRequestDto } from './dto/product-request.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Post()
  createProduct(@Body() product: ProductRequestDto) {
    return this.productService.createProduct(product);
  }
}
