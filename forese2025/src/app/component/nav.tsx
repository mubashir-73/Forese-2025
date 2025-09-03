import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Nav() {
  return (
    <>
      <div className="flex justify-between items-center fixed top-0 left-0 right-0 h-30 z-50 w-full bg-transparent p-5 ">
        <div>
          <Image src="/FOR.png" alt="logo" width={125} height={110} />
        </div>
        <div className="hidden md:flex gap-6 text-white font-light tracking-tight mr-10 items-center">
          <p>ABOUT</p>
          <p>EVENTS</p>
          <p>TEAM</p>
          <button className="bg-white text-black rounded-md px-4 py-2 font-light">
            CONTACT US
          </button>
        </div>
      </div>
    </>
  );
}
