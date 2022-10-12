import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ProductModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
