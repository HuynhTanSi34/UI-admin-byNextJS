"use client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.title = "Thêm mới tin tức";
  }, []);
  return (
    <section className="md:overflow-y-auto md:scrollbar-thin md:scrollbar-thumb-gray-400 md:scrollbar-track-gray-200 h-screen overflow-y-auto">
      <div className="p-4 bg-gray-100 flex justify-between items-center">
        <span className="text-xl">Home / Tin tức / Thêm mới tin tức</span>
        <div>
          <button className="p-2 bg-blue-500 text-white mr-3">+ Lưu</button>
          <button className="p-2 bg-blue-500 text-white">
            + Lưu & Quay lại
          </button>
        </div>
      </div>
      <div className="p-4 mb-8">
        <div className="px-4 py-3 bg-gray-100 border border-gray-300">
          Thông tin tin tức
        </div>
        <form className="bg-gray-100 w-full border border-gray-300 grid grid-cols-3 mb-8">
          <div className="border-gray-300 border-b-1 py-8 pl-9">
            <p className="text-2xl">Thông tin tin tức</p>
            <p>Nhập tên tin tức</p>
          </div>
          <div className="col-span-2 border-gray-300 border-b-1 py-4 pr-4 content-center">
            <p>Tên tin tức</p>
            <input className="border border-gray-300 w-full p-2" />
          </div>

          <div className="border-gray-300 border-b-1 py-8 pl-9">
            <p className="text-2xl">Hình ảnh</p>
            <p>Upload và chỉnh sửa hình ảnh tin tức</p>
            <button className="p-2 bg-blue-500 text-white">Chọn hình</button>
          </div>
          <div className="col-span-2 border-gray-300 border-b-1 py-4 pr-4 content-center">
            <img />
          </div>

          <div className="border-gray-300 border-b-1 py-8 pl-9">
            <p className="text-2xl">Nhóm tin tức</p>
            <p>Phân loại tin tức theo nhóm để quản lí</p>
          </div>
          <div className="col-span-2 border-gray-300 border-b-1 py-4 pr-4 content-center">
            <p>Danh mục tin tức</p>
            <select
              id="cars"
              className="w-full p-2 border-2 border-solid border-gray-200"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className="border-gray-300 border-b-1 py-8 pl-9">
            <p className="text-2xl">Mô tả ngắn</p>
            <p>Bạn có thể nhập thông tin mô tả ngắn gọn về tin tức </p>
          </div>
          <div className="col-span-2 border-gray-300 border-b-1 py-4 pr-4 content-center">
            <p>Mô tả ngắn</p>
          </div>

          <div className="border-gray-300 border-b-1 py-8 pl-9">
            <p className="text-2xl">Tùy chọn</p>
            <p>Thiết lập các trạng thái của tin tức</p>
          </div>
          <div className="col-span-2 border-gray-300 border-b-1 py-4 pr-4 content-center">
            <p>Tùy chọn tin tức</p>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" /> Mới{" "}
              <input type="checkbox" className="mr-2 ml-3" /> Hot
            </div>
          </div>

          <div className="border-gray-300 border-b-1 py-8 pl-9">
            <p className="text-2xl">Nâng cao</p>
            <p>Bạn có thể sắp xếp thứ tự theo tin tức</p>
          </div>
          <div className="col-span-2 border-gray-300 border-b-1 py-4 pr-4 content-center">
            <p>Sắp xếp</p>
            <input className="border border-gray-300 w-full p-2" />
          </div>

          <div className="border-gray-300 border-b-1 py-8 pl-9">
            <p className="text-2xl">Người viết</p>
          </div>
          <div className="col-span-2 border-gray-300 border-b-1 py-4 pr-4 content-center">
            <p>Người viết</p>
            <input className="border border-gray-300 w-full p-2" />
          </div>

          <div className="border-gray-300 border-b-1 py-8 pl-9">
            <p className="text-2xl">Tối ưu SEO</p>
            <div>
              Thiết lập các thẻ mô tả giúp khách hàng dễ dàng tìm thấy tin tức
              trên công cụ tìm kiếm Google
            </div>
          </div>
          <div className="col-span-2 border-gray-300 border-b-1 py-4 pr-4 content-center">
            <p>Tiêu đề trang(Meta title)</p>
            <input className="border border-gray-300 w-full p-2" />
            <p className="mt-4">Mô tả trang</p>
            <input className="border border-gray-300 w-full p-2" />
          </div>

          <div className="border-gray-300 border-b-1 py-8 pl-9">
            <p className="text-2xl">Trạng thái</p>
            <div>Bạn có thể ngưng dùng tin tức khỏi hệ thống</div>
          </div>
          <div className="col-span-2 border-gray-300 border-b-1 py-4 pr-4 content-center">
            <p>Ngưng dùng</p>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" /> Ngưng dùng
            </div>
          </div>

          <div className="px-4 py-3 bg-gray-100 border border-gray-300 col-span-3 flex flex-row-reverse">
            <button className="p-2 bg-blue-500 text-white">
              + Lưu & Quay lại
            </button>
            <button className="p-2 bg-blue-500 text-white mr-3">+ Lưu</button>
          </div>
        </form>
      </div>
    </section>
  );
}
