import { Button } from "@/components/ui/button";
import {
  House,
  ShoppingCart,
  User,
  ChevronDown,
  BookUser,
  ChartBarStacked,
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
} from "lucide-react";
import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-500"
            >
              <ChartBarStacked className="h-6 w-6" />
              Danh mục
              <ChevronDown className="h-6 w-6" strokeWidth={3} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Shirt />
              Quần áo
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Watch />
              Đồng hồ
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Gem />
              Trang sức
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Smartphone />
              Điện thoại
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Laptop />
              Laptop
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Armchair />
              Đồ nội thất
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BookOpenText />
              Sách
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Refrigerator />
              Thiết bị gia dụng
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" className="text-gray-700 hover:text-blue-500">
          <BookUser className="h-6 w-6" />
          Liên hệ
        </Button>

        <Link href="/cart">
          <Button variant="ghost" className="text-gray-700 hover:text-blue-500">
            <ShoppingCart className="h-6 w-6" />
            giỏ hàng
          </Button>
        </Link>

        <Button variant="ghost" className="text-gray-700 hover:text-blue-500">
          <Bell className="h-6 w-6" />
          Thông báo
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-500"
            >
              <User className="h-6 w-6" />
              Tài khoản
              <ChevronDown className="h-6 w-6" strokeWidth={3} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <ShoppingBasket />
              Đơn mua
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Package />
              Đơn bán
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard />
              Lịch sử giao dịch
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              Cài đặt tài khoản
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
