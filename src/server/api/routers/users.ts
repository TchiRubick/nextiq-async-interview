import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  selectRole: publicProcedure
    .input(z.object({role: z.enum()}))
    .mutation({
      
    })
})