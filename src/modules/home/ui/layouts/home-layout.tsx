import { SidebarProvider } from "@/components/ui/sidebar";
import HomeNavbar from "../components/home-navbar";

interface LayoutProps {
    children: React.ReactNode;
}

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
        <div className="w-full">
            <HomeNavbar />
            <div>{ children}</div>
        </div>

    </SidebarProvider>
  )
}