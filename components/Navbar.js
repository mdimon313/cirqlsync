"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";

export default function Navbar() {
  const current = usePathname();
  const isActive = (href) =>
    current === href || (href !== "/" && current.startsWith(href));

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="max-w-screen w-full">
      <Container>
        <div className="container flex flex-wrap items-center justify-between mx-auto max-w-screen text-slate-800">
          <Link
            href="/"
            className="mr-4 block cursor-pointer py-1.5 text-red-600 font-extrabold text-2xl"
          >
            CirQL Sync
          </Link>

          <div className="lg:hidden">
            <button
              className="dark:text-slate-50 relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 min-h-screen w-64 bg-white dark:bg-[#0a0a0a] shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50`}
          >
            <div className="flex flex-row items-center border-b pb-4">
              <Link
                href="/"
                className="cursor-pointer text-red-600 font-extrabold text-xl pt-4 ps-4"
              >
                CirQL Sync
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-slate-600 dark:text-slate-50 hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col h-full gap-4 p-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500"
                >
                  <Link
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                    href={item.href}
                    className={`flex items-center font-bold ${
                      isActive(item.href)
                        ? "text-red-500 dark:text-red-500"
                        : "text-slate-600 dark:text-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <button className="bg-red-600 text-white px-6 py-1 rounded-full transition-all hover:bg-red-500 font-semibold">
                  Login
                </button>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-2 text-slate-600"
                >
                  <Link
                    href={item.href}
                    className={`flex items-center hover:text-red-500 font-bold ${
                      isActive(item.href)
                        ? "text-red-500 dark:text-red-500"
                        : "text-slate-600 dark:text-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button className="bg-red-600 hover:bg-red-500 text-white px-6 py-1 rounded-full transition-all font-semibold">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}
