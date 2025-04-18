import {
  MagnifyingGlassCircleIcon,
  PencilIcon,
  BookmarkSquareIcon,
  TrashIcon,
  ArrowPathIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
export const metadata = {
  title: "Danh sách khách hàng",
  description: "Danh sách khách hàng",
};

export default function Page() {
  return (
    <>
      <div className="p-4 bg-gray-100 flex justify-between items-center">
        <span className="text-xl">
          Home / Khách hàng / Danh sách khách hàng
        </span>
        <button className="p-2 bg-blue-500 text-white">+ Thêm mới</button>
      </div>
      <div className="bg-white mt-8 flex p-4 flex justify-end">
        <div className="border-2 border-solid border-gray-200 flex">
          <input className="p-1 w-110" />
          <button className="flex items-center pl-2 w-10 border-l-2 border-solid border-gray-200 ">
            <MagnifyingGlassCircleIcon className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="px-4 py-3 bg-gray-100 border border-gray-300">
          Danh sách khách hàng
        </div>
        <table className="border-collapse border border-gray-400 bg-white w-full">
          <thead>
            <tr className="text-left">
              <th className="border border-gray-300 text-center">
                <input type="checkbox" />
              </th>
              <th className="border border-gray-300"></th>
              <th className="border border-gray-300">Tên</th>
              <th className="border border-gray-300">Tài khoản</th>
              <th className="border border-gray-300">Email đăng nhập</th>
              <th className="border border-gray-300">Điện thoại</th>
              <th className="border border-gray-300">Địa chỉ</th>
              <th className="border border-gray-300">Hình ảnh</th>
              <th className="border border-gray-300">Ngưng dùng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 text-center">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300 flex justify-center">
                <button className="hover:bg-sky-500/100 mr-2 p-1 border border-gray-300 hover:text-white">
                  <PencilIcon className="w-4 h-4" />
                </button>
                <button className="hover:bg-sky-500/100 mr-2 p-1 border border-gray-300 hover:text-white">
                  <BookmarkSquareIcon className="w-4 h-4" />
                </button>
                <button className="hover:bg-red-500/100 p-1 border border-gray-300 hover:text-white">
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </td>
              <td className="border border-gray-300 max-w-36 overflow-hidden text-nowrap text-sky-500">
                Tên sản
              </td>
              <td className="border border-gray-300">Tài khoản</td>
              <td className="border border-gray-300 max-w-36 overflow-hidden text-nowrap text-sky-500">
                Email đăng nhập
              </td>
              <td className="border border-gray-300">Điện thoại</td>
              <td className="border border-gray-300">Điện thoại</td>
              <td className="border border-gray-300">Điện thoại</td>
              <td className="border border-gray-300 text-center">
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="px-4 py-3 bg-gray-100 border border-gray-300 flex justify-between">
          <div>
            <button>
              <TrashIcon className="w-5 h-5" />
            </button>
            <button>
              <ArrowPathIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
