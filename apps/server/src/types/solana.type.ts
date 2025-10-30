import z from "zod";

export const SolanaTriggerSetSchema = z.object({
  transactionTypes: z.string(),
  accountAddresses: z.string(),
})
