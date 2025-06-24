import { z } from 'zod';

export const onboardingSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  bio: z.string().min(1, 'Bio is required'),
  location: z.string().min(1, 'Location is required'),
  category: z.array(z.string()).min(1, 'Select at least one category'),
  languages: z.array(z.string()).min(1, 'Select at least one language'),
  fee: z.string().min(1, 'Fee is required'),
  image: z.any().optional(),
});

export type OnboardingSchema = z.infer<typeof onboardingSchema>;

