import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-6">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h2 className="text-lg font-bold">ThriftZone</h2>
          <p className="text-gray-400 text-sm mt-2">
            Nền tảng mua bán đồ second-hand uy tín và tiện lợi nhất.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold">Liên kết</h2>
          <ul className="text-gray-400 text-sm mt-2 space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Điều khoản sử dụng
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hỗ trợ khách hàng
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold">Kết nối với chúng tôi</h2>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        <p>© 2025 ThriftZone. All rights reserved.</p>
      </div>
    </footer>
  );
}
