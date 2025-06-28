import { z } from "zod";
export const SignUpSchema = z
  .object({
    name: z.string().min(1, "Name is required"),

    email: z.string().min(1, "Email is required").email("Invalid email format"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[0-9]/, "Must contain at least one number")
      .regex(/[^a-zA-Z0-9]/, "Must contain at least one special character"),

    confirm: z.string().min(1, "Confirm Password is required"),
    checkbox: z.literal(true, {
      errorMap: () => ({
        message: "You must agree to the terms and conditions",
      }),
    }),

    url: z
      .any()
      .refine((files) => files?.length === 1, {
        message: "Profile image is required",
      })
      .refine(
        (files) =>
          ["image/jpeg", "image/png", "image/jpg"].includes(files?.[0]?.type),
        {
          message: "Only JPG, JPEG, or PNG files are allowed",
        }
      )
      .refine((files) => files?.[0]?.size <= 2 * 1024 * 1024, {
        message: "File size must be under 2MB",
      }),
  })
  .refine((data) => data.password === data.confirm, {
    path: ["confirm"],
    message: "Passwords do not match",
  });

// this code for typescript
// export type TForm = z.infer<type SignUpSchema>;

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "should match with the registered email")
    .email("Invalid email format"),
  password: z
    .string()
    .min(8, "password should match with the registered password"),
});

export const porfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  url: z
    .any()
    .refine((files) => files?.length === 1, {
      message: "Profile image is required",
    })
    .refine(
      (files) =>
        ["image/jpeg", "image/png", "image/jpg"].includes(files?.[0]?.type),
      {
        message: "Only JPG, JPEG, or PNG files are allowed",
      }
    )
    .refine((files) => files?.[0]?.size <= 2 * 1024 * 1024, {
      message: "File size must be under 2MB",
    }),
});
