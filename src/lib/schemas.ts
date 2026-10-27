import { z } from "zod";

export const heroFormSchema = z.object({
  name: z.string().min(2, "Name is required").max(120),
  email: z.string().email("Valid email is required").max(254),
  interest: z.enum([
    "Safety training",
    "Corporate & management training",
    "Firefighting training",
    "Equipment operator certification",
    "Not sure yet",
  ], { message: "Select a training interest" }),
  company: z.string().max(200).optional().default(""),
  phone: z.string().max(30).optional().default(""),
  /** Honeypot — must be empty */
  website: z.string().max(0, "Bot detected").optional().default(""),
});

export type HeroFormData = z.infer<typeof heroFormSchema>;
