'useClient'
import Header from "@/components/header";
import { Background } from "@/components/ui/background";
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { BackgroundBeamsD } from "./tasks/components/background";

export default function Home() {
  return (
    <div>
      <BackgroundBeamsD />
      <HoverBorderGradient className="bg-white text-black dark:bg-black dark:text-white">
        Buttn
      </HoverBorderGradient>
    </div>
  );
}
