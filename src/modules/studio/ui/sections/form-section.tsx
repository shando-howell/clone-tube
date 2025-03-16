"use client";

import { Suspense } from "react";
import { useForm } from "react-hook-form";
import { ErrorBoundary } from "react-error-boundary";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { trpc } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MoreVerticalIcon, TrashIcon } from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
    FormItem,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { videoUpdateSchema } from "@/db/schema";

interface FormSectionProps {
    videoId: string;
}

export const FormSection = ({ videoId }: FormSectionProps) => {
    return (
        <Suspense fallback={<FormSectionSkeleton />}>
            <ErrorBoundary fallback={<p>Error</p>}>
                <FormSectionSuspense videoId={videoId}/>
            </ErrorBoundary>
        </Suspense>
    )
}

const FormSectionSkeleton = () => {
    return <p>Loading....</p>
};

const FormSectionSuspense = ({videoId}: FormSectionProps) => {
    const [video] = trpc.studio.getOne.useSuspenseQuery({ id: videoId });

    const form = useForm<z.infer<typeof videoUpdateSchema>>({
        defaultValues: video,
    })

    return (
        <div className="flex items-center justify-between mb-6">
            <div>
                <h1 className="text-2xl font-bold">Video details</h1>
                <p className="text-xs text-muted-foreground">Manage your video details</p>
            </div>
            <div className="flex items-center gap-x-2">
                <Button type="submit" disabled={false}>
                    Save
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <MoreVerticalIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <TrashIcon className="size-4 mr-2" />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default FormSection