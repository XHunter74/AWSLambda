import { MiddlewareObj } from '@middy/core';

export const ensureJsonHeader = (): MiddlewareObj<any, any> => ({
  before: async (request) => {
    const h = request.event.headers || {};
    if (!h['Content-Type'] && !h['content-type']) {
      request.event.headers = {
        ...h,
        'Content-Type': 'application/json'
      };
    }
  }
});
