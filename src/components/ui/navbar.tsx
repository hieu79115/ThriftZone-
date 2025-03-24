import { Button } from "@/components/ui/button";
import {
  House,
  ShoppingCart,
  User,
  ChevronDown,
  BookUser,
  ChartBarStacked,
  Bell,
} from "lucide-react";
import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-center items-center">
      <div className="flex items-center gap-6">
        <Link href="/">
          <Button variant="ghost" className="text-gray-700 hover:text-blue-500">
            <House className="h-6 w-6" />
            Trang chủ
          </Button>
        </Link>

        <Button variant="ghost" className="text-gray-700 hover:text-blue-500">
          <ChartBarStacked className="h-6 w-6" />
          Danh mục
          <ChevronDown className="h-6 w-6" strokeWidth={3} />
        </Button>

        <Button variant="ghost" className="text-gray-700 hover:text-blue-500">
          <BookUser className="h-6 w-6" />
          Liên hệ
        </Button>

        <Link href="/cart">
          <Button variant="ghost" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700" />
            giỏ hàng
          </Button>
        </Link>

        <Button variant="ghost">
          <Bell className="h-6 w-6 text-gray-700" />
          Thông báo
        </Button>

        <Button variant="ghost">
          <User className="h-6 w-6 text-gray-700" />
          Tài khoản
          <ChevronDown className="h-6 w-6 text-gray-700" strokeWidth={3} />
        </Button>

      </div>
    </nav>
  );
}

export default Navbar;
