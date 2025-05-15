import { APIGatewayProxyHandler } from 'aws-lambda';
import { PaymentDto, PaymentDtoSchema } from './models/payment.dto';
import { PaymentResultDto } from './models/payment-result.dto';
import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import { validateBody } from './validators/body.validator';
import { ensureJsonHeader } from './validators/headers.validator';
import { errorResponder } from './validators/error-responder';

const businessLogic: APIGatewayProxyHandler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    const data = event.body as unknown as PaymentDto;

    const paymentResult = {} as PaymentResultDto;
    paymentResult.id = data.id;
    paymentResult.status = 'success';
    paymentResult.amount = data.amount;
    paymentResult.totalAmount = Math.round(data.amount * 1.2 * 100) / 100; // Simulate a 20% fee
    paymentResult.currency = data.currency;

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentResult),
    };
};

export const handler = middy(businessLogic)
    .use(ensureJsonHeader())
    .use(httpJsonBodyParser())
    .use(validateBody<PaymentDto>(PaymentDtoSchema))
    .use(errorResponder());

