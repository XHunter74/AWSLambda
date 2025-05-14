import { createError } from '@middy/util';
import { ZodSchema } from 'zod';
import { MiddlewareObj } from '@middy/core';

interface ValidationError extends Error {
    statusCode?: number;
    details?: unknown;
}

export const validateBody = <T>(schema: ZodSchema<T>): MiddlewareObj<any, any, ValidationError> => ({
    before: async (request) => {
        const parsed = schema.safeParse(request.event.body);
        if (!parsed.success) {
            const err = createError(400, 'Validation error') as ValidationError;
            err.details = parsed.error.format();
            throw err;
        }
        request.event.body = parsed.data;
    }
});
