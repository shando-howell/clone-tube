import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import MainSection from "./MainSection";

const HomeSidebar = () => {
  return (
    <Sidebar className="pt-16 z-40 border-none">
        <SidebarContent className="bg-background">
            <MainSection />
        </SidebarContent>
    </Sidebar>
  )
}

export default HomeSidebar;