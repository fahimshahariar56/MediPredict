import { z } from "zod";

export const createUserSchema = z
    
.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .trim()
    .email("Invalid email address"),

  role: z
    .enum(["user", "admin"])
    .optional(),
});





export const updateUserSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .optional(),

    email: z
      .string()
      .trim()
      .email("Invalid email address")
      .optional(),

    role: z
      .enum(["user", "admin"])
      .optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field is required",
  });



  export const getUsersQuerySchema = z.object({
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(10),
});