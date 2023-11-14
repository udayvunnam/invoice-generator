import { z } from 'zod';

// Zod Schema
const invoiceSchema = z.object({
  invoiceNumber: z.string(),
  issueDate: z.date(),
  dueDate: z.date(),
  biller: z.object({
    name: z.string(),
    email: z.string().email(),
    address: z.string(),
  }),
  client: z.object({
    name: z.string(),
    email: z.string().email(),
    address: z.string(),
  }),
  notes: z.string(),
  items: z.array(
    z.object({
      description: z.string(),
      quantity: z.number(),
      unitPrice: z.number(),
      total: z.number(),
    })
  ),
  subtotal: z.number(),
  tax: z.number(),
  total: z.number(),
});
