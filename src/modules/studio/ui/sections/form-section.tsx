"use client";

import { trpc } from "@/trpc/client";

interface FormSectionProps {
    videoId: string;
}

const FormSection = ({videoId}: FormSectionProps) => {
    const [video] = trpc.studio.getOne.useSuspenseQuery({ id: videoId })

    return (
        <div>Form Section</div>
    )
}

export default FormSection