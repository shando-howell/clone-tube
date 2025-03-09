"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
    const [data] = trpc.hello.useSuspenseQuery({
        text: "Shando - Hybrid",
    })
    return (
        <div>
            <h1>Page Client: {data.greeting}</h1>
        </div>
    )
}