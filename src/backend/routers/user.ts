/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { z } from "zod";
import { getters, setters } from "../db";
import { createTRPCRouter, privateProcedure } from "./trpc";

export const userRouter = createTRPCRouter({
  launchUser: privateProcedure
    .input(
      z.object({
        id: z.string(),
        email: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { user } = await setters.user.launchUser({
        id: input.id,
        email: input.email,
      });
      return { user };
    }),

  byId: privateProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { id } = input;
      const { user } = await getters.user.getUserById({ id });
      return { user };
    }),
});
