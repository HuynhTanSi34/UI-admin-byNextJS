"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  HomeIcon,
  Cog6ToothIcon,
  TableCellsIcon,
  PencilSquareIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const navItems = [
  { label: "Tổng quan", icon: HomeIcon, menu: null, href: "/admin/dashboard" },
  {
    label: "Sản phẩm",
    menu: "menu1",
    icon: Cog6ToothIcon,
    links: [
      { href: "/admin/product/products", text: "Sản phẩm" },
      { href: "/admin/product/productgroup", text: "Nhóm sản phẩm" },
      { href: "/admin/product/inventory", text: "Tồn kho" },
    ],
  },
  {
    label: "Tin tức",
    menu: "menu2",
    icon: TableCellsIcon,
    links: [
      { href: "/admin/news/create", text: "Thêm mới tin tức" },
      { href: "/admin/news/newslist", text: "Danh sách tin tức" },
      { href: "/admin/news/newsgroup", text: "Nhóm tin tức" },
    ],
  },
  {
    label: "Đơn hàng",
    menu: "menu3",
    icon: PencilSquareIcon,
    links: [
      { href: "/admin/oder/oders", text: "Đơn hàng" },
      { href: "/admin/oder/shipping", text: "Vận chuyển" },
    ],
  },
  {
    label: "Khách hàng",
    menu: "menu4",
    icon: UserGroupIcon,
    links: [
      { href: "/admin/users/member", text: "Danh sách khách hàng" },
      { href: "/admin/users/contact", text: "Liên hệ từ khách hàng" },
      { href: "/admin/users/newsletter", text: "Danh sách Email đăng ký" },
    ],
  },
];

export default function NavLinks() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="w-58 h-full bg-gray-800 text-white py-4 fixed left-0">
      <div className="flex flex-col space-y-2">
        {navItems.map((item) =>
          item.menu === null ? (
            <button
              key={item.label}
              onClick={() => router.push(item.href as string)}
              className="w-full text-left px-4 py-2  rounded hover:bg-gray-600 flex"
            >
              {item.icon && <item.icon className="h-5 w-5 text-white mr-2" />}
              {item.label}
            </button>
          ) : (
            <Dropdown
              key={item.menu}
              label={item.label}
              menu={item.menu}
              isOpen={openDropdown === item.menu}
              toggle={toggleDropdown}
              icon={item.icon}
              links={item.links}
            />
          )
        )}
      </div>
    </div>
  );
}

export function Dropdown({
  label,
  icon: Icon,
  menu,
  isOpen,
  toggle,
  links,
}: any) {
  return (
    <div className="relative">
      <button
        onClick={() => toggle(menu)}
        className="text-white px-4 py-2 rounded hover:bg-gray-600 flex w-full"
      >
        {Icon && <Icon className="h-5 w-5 text-white mr-2" />}
        {label}
      </button>
      {isOpen && links && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-1 w-full bg-gray-700 text-white rounded shadow-md flex flex-col"
        >
          {links.map((link: { href: string; text: string }) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-white hover:bg-gray-200 hover:text-black"
            >
              {link.text}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}
