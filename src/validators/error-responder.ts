import { MiddlewareObj } from '@middy/core';

interface ValidationError extends Error {
    statusCode?: number;
    details?: unknown;
}

export const errorResponder = (): MiddlewareObj<any, any, ValidationError> => ({
    onError: async (request) => {
        const err = request.error!;
        const statusCode = err.statusCode ?? 500;
        const details = err.details;

        request.response = {
            statusCode,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: err.message,
                ...(details ? { details } : {})
            })
        };
        request.error = null;
    }
});
