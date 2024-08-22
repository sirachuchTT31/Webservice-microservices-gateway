import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MicroPaymentService {
    constructor(
        @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy,
        @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy
    ) { }

    getPaymentGateway(request: Request) {
        const payload = {
            payload: request.body,
            header: request.headers
        }
        return this.paymentClient.send({ cmd: 'payment' }, payload);
    }

    postPaymentGateway(request : Request) {
        const payload = {
            payload: request.body,
            header: request.headers
        }

        return this.paymentClient.send({ cmd: 'payment' }, payload);
    }
}
