import { Module } from '@nestjs/common';
import { MicroProductController } from './micro-product.controller';
import { MicroProductService } from './micro-product.service';

@Module({
  controllers: [MicroProductController],
  providers: [MicroProductService]
})
export class MicroProductModule {}
