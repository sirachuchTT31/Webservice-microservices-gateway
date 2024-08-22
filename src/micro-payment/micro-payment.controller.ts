import { Controller, Get, Post, Req } from '@nestjs/common';
import { MicroPaymentService } from './micro-payment.service';
import { Observable } from 'rxjs';

@Controller('payment')
export class MicroPaymentController {

    constructor(
        private readonly microservicePaymentService: MicroPaymentService,
    ) {
    }

    @Get('')
    getPaymentGateway(@Req() request?: Request): Observable<any> {
        return this.microservicePaymentService.getPaymentGateway(request)
    }

    @Post('')
    postPaymentGateway(@Req() request: Request) {
        return this.microservicePaymentService.postPaymentGateway(request);
    }
}
