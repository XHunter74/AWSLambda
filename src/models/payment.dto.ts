import { z } from 'zod';

export const PaymentDtoSchema = z.object({
  id:       z.number(),
  amount:   z.number(),
  currency: z.string().length(3),
});

export type PaymentDto = z.infer<typeof PaymentDtoSchema>;
