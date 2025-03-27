"use client";

import { Button } from "@/components/ui/button";
import {
  House,
  ShoppingCart,
  User,
  ChevronDown,
  BookUser,
  ChartBar,
  Bell,
  Shirt,
  Watch,
  Gem,
  Smartphone,
  Laptop,
  Armchair,
  BookOpenText,
  Refrigerator,
  ShoppingBasket,
  Package,
  CreditCard,
  Settings,
  Menu,
} from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuItems = [
  { label: "Trang chủ", icon: House, href: "/" },
  {
    label: "Danh mục",
    icon: ChartBar,
    subItems: [
      { label: "Quần áo", icon: Shirt, href: "/category/clothing" },
      { label: "Đồng hồ", icon: Watch, href: "/category/watches" },
      { label: "Trang sức", icon: Gem, href: "/category/jewelry" },
      { label: "Điện thoại", icon: Smartphone, href: "/category/phones" },
      { label: "Laptop", icon: Laptop, href: "/category/laptops" },
      { label: "Đồ nội thất", icon: Armchair, href: "/category/furniture" },
      { label: "Sách", icon: BookOpenText, href: "/category/books" },
      {
        label: "Thiết bị gia dụng",
        icon: Refrigerator,
        href: "/category/appliances",
      },
    ],
  },
  { label: "Liên hệ", icon: BookUser, href: "/contact" },
  { label: "Giỏ hàng", icon: ShoppingCart, href: "/cart" },
  { label: "Thông báo", icon: Bell, href: "/notifications" },
  {
    label: "Tài khoản",
    icon: User,
    subItems: [
      { label: "Đơn mua", icon: ShoppingBasket, href: "/orders" },
      { label: "Đơn bán", icon: Package, href: "/sell" },
      { label: "Lịch sử giao dịch", icon: CreditCard, href: "/transactions" },
      { label: "Cài đặt tài khoản", icon: Settings, href: "/profile" },
    ],
  },
];

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex md:justify-center justify-between items-center">
      <Link href="/" className="md:hidden text-xl font-bold text-gray-700">
        ThriftZone
      </Link>

      {/* Mobile Menu */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="p-4">
          <DrawerTitle className="sr-only">Menu</DrawerTitle>
          <div className="flex flex-col gap-2 overflow-y-scroll">
            {menuItems.map((item, index) =>
              item.subItems ? (
                <div key={index}>
                  <Button
                    variant="ghost"
                    className="w-full text-left flex justify-start"
                  >
                    <item.icon className="h-6 w-6" />
                    {item.label}
                  </Button>
                  <div className="ml-10 flex flex-col gap-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-500 text-left w-full"
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className="w-full"
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                >
                  <Button
                    variant="ghost"
                    className="w-full text-gray-700 hover:text-blue-500 flex items-center justify-start"
                  >
                    <item.icon className="h-6 w-6" />
                    {item.label}
                  </Button>
                </Link>
              )
            )}
          </div>
        </DrawerContent>
      </Drawer>

      <div className="hidden md:flex items-center gap-6">
        {menuItems.map((item, index) =>
          item.subItems ? (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-blue-500 flex items-center"
                >
                  <item.icon className="h-6 w-6" />
                  {item.label}
                  <ChevronDown className="h-5 w-5 ml-1" strokeWidth={3} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {item.subItems.map((subItem, subIndex) => (
                  <DropdownMenuItem
                    key={subIndex}
                    asChild
                    className="focus:text-blue-500"
                  >
                    <Link
                      href={subItem.href}
                      className="flex items-center gap-2"
                    >
                      <subItem.icon className="h-5 w-5" />
                      {subItem.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link key={index} href={item.href}>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-blue-500 flex items-center"
              >
                <item.icon className="h-6 w-6" />
                {item.label}
              </Button>
            </Link>
          )
        )}
      </div>
    </nav>
  );
}

export default Navbar;
