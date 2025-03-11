import { db } from "@/db";
import { videos } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { z } from "zod";

export const studioRouter = createTRPCRouter({
    getMany: protectedProcedure
    .input(
        z.object({
            cursor: z.object({
                id: z.string().uuid(),
            }),
        })
    )
    .query(async () => {
        const data = await db
            .select()
            .from(videos);

            return data;
    }),
});