import { Module } from '@nestjs/common';
import { MicroPaymentController } from './micro-payment.controller';
import { MicroPaymentService } from './micro-payment.service';

@Module({
  controllers: [MicroPaymentController],
  providers: [MicroPaymentService]
})
export class MicroPaymentModule {}
