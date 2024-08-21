import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {

  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('payment')
  getPayment(): Observable<any> {
    console.log('test')
    return this.appService.getPayment()
  }

  @Get('product')
  getProduct(): Observable<any> {
    console.log('product')
    return this.appService.getProduct();
  }
}
