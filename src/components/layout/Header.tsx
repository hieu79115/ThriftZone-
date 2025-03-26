"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LoginForm from "../ui/login-modal";
import RegisterForm from "../ui/register-modal";
import { useState } from "react";

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <header className="flex justify-between items-center w-full py-4 px-6 bg-gray-900">
      <div className="hidden md:flex text-2xl font-bold text-white">
        ThriftZone
      </div>
      <div className="relative md:w-1/3 w-1/2 block">
        <Input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          className="pl-10 pr-4 py-2 border rounded-lg w-full text-white"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-white" />
      </div>

      <div className="items-center flex gap-4">
        <Button
          variant="link"
          className="text-white"
          onClick={() => setIsLoginOpen(true)}
        >
          Đăng nhập
        </Button>
        <Button
          variant="link"
          className="text-white hidden md:flex "
          onClick={() => setIsRegisterOpen(true)}
        >
          Đăng ký
        </Button>
        <Link href="/sell" className="hidden md:flex">
          <Button variant="outline" onClick={() => setIsLoginOpen(true)}>
            Đăng bán
          </Button>
        </Link>
      </div>
      <LoginForm
        isOpen={isLoginOpen}
        setIsOpen={setIsLoginOpen}
        switchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />
      <RegisterForm
        isOpen={isRegisterOpen}
        setIsOpen={setIsRegisterOpen}
        switchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </header>
  );
}
