"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Project" },
    { href: "/contact", label: "Contact" },
]

export default function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center space-x-2 px-20">
                    <Link href="/" className="text-xl font-bold">
                        Elisio Cabral Sa
                    </Link>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="hidden md:flex md:items-center md:space-x-2">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href}>
                                <Button
                                    variant="ghost"
                                    className={`rounded-full ${
                                        pathname === item.href
                                            ? "bg-muted hover:bg-muted"
                                            : "hover:bg-transparent hover:underline"
                                    }`}
                                >
                                    {item.label}
                                </Button>
                            </Link>
                        ))}
                    </div>
                    <Link href="/services" className="hidden md:inline-flex">
                        <Button variant="outline">Service</Button>
                    </Link>
                    <Link href="/blogs" className="hidden md:inline-flex">
                        <Button variant="outline">Blog</Button>
                    </Link>
                    {/*<Link href="/signin" className="hidden md:inline-flex">*/}
                    {/*    <Button variant="outline">Sign In</Button>*/}
                    {/*</Link>*/}
                    <ModeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-lg ${
                                            pathname === item.href
                                                ? "font-bold text-primary"
                                                : "text-muted-foreground"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                {/*<Link*/}
                                {/*    href="/signin"*/}
                                {/*    onClick={() => setIsOpen(false)}*/}
                                {/*    className="text-lg text-muted-foreground"*/}
                                {/*>*/}
                                {/*    Sign In*/}
                                {/*</Link>*/}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}