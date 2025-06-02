"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Phone, Mail, User, MessageSquare, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import Image from "next/image"

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
    ({ className, title, children, ...props }, ref) => {
      return (
          <li>
            <NavigationMenuLink asChild>
              <a
                  ref={ref}
                  className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      className,
                  )}
                  {...props}
              >
                <div className="text-sm font-medium poppins leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
              </a>
            </NavigationMenuLink>
          </li>
      )
    },
)
ListItem.displayName = "ListItem"

export default function Header() {
  const isMobile = useMobile()

  return (
      <>
        <div className="notification-bar mx-auto flex items-center justify-center bg-brand-primary text-white text-sm py-2 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@coolenterprisesmw.com</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+265 999 362 633</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <span className="font-medium">Hosting Flash Sale: Starting at MWK 150,000/yr for a limited time</span>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/contact" className="hover:underline flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span className="hidden md:inline">Live Chat</span>
                </Link>
                <Link href="/login" className="hover:underline flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span className="hidden md:inline">Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <header className="sticky top-0 py-3 z-50 w-full bg-brand-secondary-dark">
          <div className="container mx-auto flex h-16 items-center justify-center">
            <div className="flex items-center mx-auto w-full">
              <Link href="/" className="font-bold text-xl mr-6 text-brand-secondary">
                <Image src={"/logo/SVG/cool-secondary-long.svg"} alt={"Logo Cool Enteprises Limited"} width={500} height={500} className={"w-auto h-12"} />
              </Link>

              {!isMobile && (
                  <NavigationMenu className={" ml-8 flex w-fit"}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>


                      <NavigationMenuItem>
                        <Link href="/register-domain" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Domain Registration</NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <Link href="/blog" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog & Resources</NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact & Support</NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>


                    </NavigationMenuList>
                  </NavigationMenu>
              )}
            </div>

            {!isMobile ? (
                <div className="flex items-center mx-auto">
                  <Button asChild variant={"primary"}>
                    <Link href="tel:09993483493">Call +265 999 323 233</Link>
                  </Button>
                </div>
            ) : (
                <div className="flex items-center mx-auto">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                      <nav className="flex flex-col gap-4 mt-8">
                        <Link href="/" className="text-lg font-medium">
                          Home
                        </Link>
                        <div>
                          <h3 className="text-lg font-medium mb-2">Hosting Plans</h3>
                          <div className="pl-4 flex flex-col gap-2">
                            <Link href="/hosting" className="text-sm">
                              Web Hosting
                            </Link>
                            <Link href="/hosting#shared" className="text-sm">
                              Shared Hosting
                            </Link>
                            <Link href="/hosting#business" className="text-sm">
                              Business Hosting
                            </Link>
                            <Link href="/hosting#wordpress" className="text-sm">
                              WordPress Hosting
                            </Link>
                            <Link href="/hosting/compare" className="text-sm">
                              Compare Plans
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2">Domain</h3>
                          <div className="pl-4 flex flex-col gap-2">
                            <Link href="/register-domain" className="text-sm">
                              Register Domain
                            </Link>
                            <Link href="/domain-transfer" className="text-sm">
                              Transfer Domain
                            </Link>
                            <Link href="/domain-extensions" className="text-sm">
                              Domain Extensions
                            </Link>
                            <Link href="/domain-pricing" className="text-sm">
                              Domain Pricing
                            </Link>
                          </div>
                        </div>
                        <Link href="/blog" className="text-lg font-medium">
                          Blog
                        </Link>
                        <div>
                          <h3 className="text-lg font-medium mb-2">Help Center</h3>
                          <div className="pl-4 flex flex-col gap-2">
                            <Link href="/support" className="text-sm">
                              Support Center
                            </Link>
                            <Link href="/knowledge-base" className="text-sm">
                              Knowledge Base
                            </Link>
                            <Link href="/faq" className="text-sm">
                              FAQ
                            </Link>
                            <Link href="/contact" className="text-sm">
                              Contact Us
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-center mt-4">
                          <Phone className="h-4 w-4 mr-2" />
                          <span className="text-sm">Call: +265 999 362 633</span>
                        </div>
                        <Button asChild className="mt-4">
                          <Link href="/get-started">Client Area</Link>
                        </Button>
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>
            )}
          </div>
        </header>
      </>
  )
}
