import { z } from "zod";

export const searchSchema = z.object({
  name: z.string().min(2).optional(),
  maxCost: z.number().min(0).optional(),
  propertyType: z.array(z.string()).optional(),
  bedType: z.array(z.string()).optional(),
  paymentType: z.array(z.string()).optional(),
  roomAmenities: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  star: z.array(z.string()).optional(),
});

// and not undefined
export type SearchType = z.infer<typeof searchSchema>;

export const defaultSearch = {
  name: "",
  maxCost: 10000,
  propertyType: [],
  bedType: [],
  paymentType: [],
  roomAmenities: [],
  tags: [],
  star: [],
};
