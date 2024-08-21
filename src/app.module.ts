import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HttpModule, HttpService } from '@nestjs/axios';


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
  ],
  controllers: [AppController],
  providers: [AppService],
  // exports : [ClientsModule]
})
export class AppModule { }
