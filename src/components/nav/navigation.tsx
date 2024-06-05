import Link from "next/link";
import brandLogo from "../../../public/images/brandlogo.svg";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "../theme-toggle";
import { NavbarMobile, NavbarDesktop } from "./nav";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-fit w-full border-border  backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        {/* mobile */}
        <div className="my-2 flex flex-row items-center justify-between  md:hidden">
          <Link href="/">
            <Image src={brandLogo} alt="logo" width={40} height={40} />
          </Link>
          <div className="flex flex-row items-center gap-x-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <NavbarMobile />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* desktop */}
        <div className="hidden flex-row items-center justify-between py-3 md:flex">
          <Link href="/" className="inline-flex">
            <Image src={brandLogo} alt="logo" width={50} height={50} />
          </Link>
          <div className="flex flex-row items-center gap-2">
            <NavbarDesktop />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
