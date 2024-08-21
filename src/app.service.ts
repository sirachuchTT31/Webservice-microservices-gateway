import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    // private readonly httpService : HttpService
    @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy,
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy
  ) {

  }
  getHello(): string {
    return 'Hello World!';
  }

  getPayment(): Observable<any> {
    return this.paymentClient.send({ cmd: 'payment' }, {});
  }

  getProduct(): Observable<any> {
    return this.productClient.send({ cmd: 'product'}, {});
  }
}
