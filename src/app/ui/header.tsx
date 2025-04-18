"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  UserCircleIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [openDropdown1, setOpenDropdown1] = useState<string | null>(null);
  const dropdownRef1 = useRef<HTMLDivElement | null>(null);
  // const router = useRouter();
  const toggleDropdown = (menu: string) => {
    setOpenDropdown1(openDropdown1 === menu ? null : menu);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef1.current &&
        !dropdownRef1.current.contains(event.target as Node)
      ) {
        setOpenDropdown1(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <nav className="bg-gray-800 px-4 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">My Dashboard</h1>

          <div className="relative">
            {/* Button mở dropdown */}
            <button
              onClick={() => setIsOpen1(!isOpen1)}
              className="text-white px-2 py-1 bg-gray-700 rounded hover:bg-gray-600 flex"
            >
              <UserCircleIcon className="h-5 w-5 text-white mr-2" />
              User ▼
            </button>

            {/* Dropdown Menu */}
            {isOpen1 && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex"
                >
                  <Cog6ToothIcon className="h-5 w-5 text-black mr-2" />
                  Đổi mật khẩu
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex"
                >
                  <UserIcon className="h-5 w-5 text-black mr-2 mt-2" />
                  Tài khoản quản trị viên
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex"
                >
                  <ArrowLeftStartOnRectangleIcon className="h-5 w-5 text-black mr-2" />
                  Đăng xuất
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
