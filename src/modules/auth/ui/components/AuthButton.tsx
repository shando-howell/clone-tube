"use client";

import { UserCircleIcon } from "lucide-react"

import { 
    UserButton,
    SignInButton,
    SignedIn,
    SignedOut
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button"

const AuthButton = () => {
    // TODO: Add different auth states

    return (
        <>
            <SignedIn>
                <UserButton />
                {/* Add menu items for studio and uuser profile */}
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal">    
                    <Button
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 
                        border-blue-500/2 rounded-full shadow-none []"
                    >
                        <UserCircleIcon />
                        Sign In
                    </Button>
                </SignInButton>
            </SignedOut>
        </>
  )
}

export default AuthButton