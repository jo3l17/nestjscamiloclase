import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
  imports: [CommonModule],
})
export class ProductModule {}
