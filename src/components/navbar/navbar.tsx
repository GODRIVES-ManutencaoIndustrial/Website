"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { TbMenuDeep } from "react-icons/tb"
import { IoMenuOutline } from "react-icons/io5"
import { FiMenu } from "react-icons/fi"
import { SlMenu } from "react-icons/sl"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { Divide } from "lucide-react"


const getInitialSreenX = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth
  }
  return 1024
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [screenX, setScreenX] = useState<number>(getInitialSreenX())

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    const handleResize = () => setScreenX(window.innerWidth)

    if (window !== undefined) {
      console.log(window.innerWidth)
      window.addEventListener("resize", handleResize)
      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return (
    <header
      className={`fixed z-50 w-full ${scrolled ? "bg-backgroundNavbar" : "bg-transparent"}`}
    >
      <nav className="mx-auto my-0 flex h-20 max-w-7xl items-center  justify-between px-3">
        <div className="pr-36">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="logo GODRIVES"
              width={48}
              height={48}
              className=""
            />
          </Link>
        </div>

        {/* {screenX <= 768 && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <HiOutlineMenuAlt3 size={42} className="text-primaryBlue" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-4">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )} */}

        {screenX <= 768 && (
          <Sheet>
            <SheetTrigger>
              {" "}
              <HiOutlineMenuAlt3 size={42} className="text-primaryBlue" />
            </SheetTrigger>
            <SheetContent className="">
              <SheetHeader className="">
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        )}

        {screenX > 768 && (
          <>
            <ul className="flex items-center gap-8 text-primaryBlue">
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="/routes/empresa">Empresa</a>
              </li>
              <li>
                <a href="/routes/servicos">Serviços</a>
              </li>
            </ul>

            <button className="rounded-3xl border-2 border-primaryBlue bg-transparent px-7 py-3 font-medium text-primaryBlue transition-all hover:bg-primaryBlue hover:text-backgroundBlue">
              Contate-nos
            </button>
          </>
        )}

        {/* {screenX > 768 && (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )} */}
      </nav>
    </header>
  )
}
