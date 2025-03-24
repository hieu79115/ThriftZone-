import { Input } from "@/components/ui/input";
import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full py-4 px-6 bg-gray-900">
      <div className="text-2xl font-bold text-white">ThriftZone</div>
      <div className="relative w-1/3">
        <Input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          className="pl-10 pr-4 py-2 border rounded-lg w-full text-white"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-white" />
      </div>
      <div className="flex items-center gap-4">
        <Link href="/auth/login">
          <Button variant="link" className="text-white">
            Đăng nhập
          </Button>
        </Link>
        <Link href="/auth/register">
          <Button variant="link" className="text-white">
            Đăng ký
          </Button>
        </Link>
        <Link href="/sell">
          <Button variant="outline">
            Đăng bán
          </Button>
        </Link>
      </div>
    </header>
  );
}
