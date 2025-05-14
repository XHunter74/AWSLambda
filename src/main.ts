import { APIGatewayEvent, Context, APIGatewayProxyResult } from 'aws-lambda';
import { PaymentDto } from './models/payment.dto';
import { PaymentResultDto } from './models/payment-result.dto';

export const handler = async (
    event: APIGatewayEvent,
    context: Context
): Promise<APIGatewayProxyResult> => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    const data = event.body ? JSON.parse(event.body) as PaymentDto : null;

    if (!data) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Invalid request' }),
        };
    }

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
