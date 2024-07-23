"use client";
import logo from "../assets/images/logo.png";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const menuItems = [{ label: "Article", href: "/article" }];

const mobileMenuItems = [{ label: "Article", href: "/article" }];

export default function NavbarDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        aria-label="Global"
        className="container mx-auto flex  items-center justify-between p-7 lg:px-10"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="flex space-x-3 items-center">
            <img src={logo} alt="Fit Lifestyle" />
            <span className="font-bold color-[#172048] text-2xl">
              FitLifestyle
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.label}
            </a>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3">
              <img src={logo} alt="Fit Lifestyle" />
              <span className="font-bold color-[#172048] text-2xl">
                FitLifestyle
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {mobileMenuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
