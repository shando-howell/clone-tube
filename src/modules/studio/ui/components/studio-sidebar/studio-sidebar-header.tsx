import { SidebarHeader } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/user-avatar";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export const StudioSidebarHeader = () => {
    const { user } = useUser();

    if (!user) return (
        <SidebarHeader className="flex items-center justify-center pb-4">
            <Skeleton className="size-[112px] rounded-full"/>
            <div className="flex flex-col items-center mt-2">
                <Skeleton />
                <Skeleton />
            </div>
        </SidebarHeader>
    );

    return (
    <SidebarHeader className="flex items-center justify-center pb-4">
        <Link href="/users/current">
            <UserAvatar
                imageUrl={user.imageUrl}
                name={user.fullName ?? "User"}
                className="size-[112px] hover:opacity-80 transition-opacity"
            />
        </Link>
        <div className="flex flex-col items-center mt-2">
            <p className="text-sm font-medium">
                Your profile
            </p>
            <p>
                {user.fullName}
            </p>
        </div>
    </SidebarHeader>
    )
}