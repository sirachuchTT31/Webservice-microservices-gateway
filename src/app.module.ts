import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HttpModule, HttpService } from '@nestjs/axios';
import { MicroProductModule } from './micro-product/micro-product.module';
import { MicroPaymentModule } from './micro-payment/micro-payment.module';


@Global()
@Module({
  imports: [
    HttpModule,
    ClientsModule.register([
      {
        name: 'PAYMENT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001
        }
      },
      {
        name: "PRODUCT_SERVICE",
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3002
        }
      }
    ]),
    MicroProductModule,
    MicroPaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports : [ClientsModule]
})
export class AppModule { }
