import { z } from 'zod';

export const formSchema = z.object({
  title: z.string().min(1, "Title is required").max(50, "Title can't be more than 50 characters"),
  body: z.string().min(1, "Body is required").max(200, "Body can't be more than 200 characters"),
});