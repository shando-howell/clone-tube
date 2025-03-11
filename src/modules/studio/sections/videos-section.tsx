"use client";

import { trpc } from "@/trpc/client";

const VideosSection = () => {
    const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery();

    return (
        <div>Videos Section</div>
    )
}

export default VideosSection