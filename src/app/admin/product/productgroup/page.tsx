import {
  MagnifyingGlassCircleIcon,
  PencilIcon,
  BookmarkSquareIcon,
  TrashIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
export const metadata = {
  title: "Nhóm sản phẩm",
  description: "Danh sách nhóm sản phẩm",
};

export default function Page() {
  return (
    <>
      <div className="p-4 bg-gray-100 flex justify-between items-center">
        <span className="text-xl">Home / Sản phẩm / Danh mục sản phẩm</span>
        <button className="p-2 bg-blue-500 text-white">+ Thêm mới</button>
      </div>
      <div className="p-4">
        <div className="px-4 py-3 bg-gray-100 border border-gray-300">
          Danh mục sản phẩm
        </div>
        <table className="border-collapse border border-gray-400 bg-white w-full">
          <thead>
            <tr className="text-left">
              <th className="border border-gray-300">
                <input type="checkbox" />
              </th>
              <th className="border border-gray-300"></th>
              <th className="border border-gray-300">Tên sản phẩm</th>
              <th className="border border-gray-300">Hình ảnh</th>
              <th className="border border-gray-300">Icon</th>
              <th className="border border-gray-300">Dùng Icon</th>
              <th className="border border-gray-300">Nổi bật</th>
              <th className="border border-gray-300">Thứ tự</th>
              <th className="border border-gray-300">Ngưng dùng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300 flex items-center">
                <button className="hover:bg-sky-500/100 mr-2 p-1 border border-gray-300 hover:text-white">
                  <PencilIcon className="w-4 h-4" />
                </button>
                <button className="hover:bg-sky-500/100 p-1 border border-gray-300 hover:text-white">
                  <BookmarkSquareIcon className="w-4 h-4" />
                </button>
              </td>
              <td className="border border-gray-300 overflow-hidden text-nowrap text-sky-500">
                Tên sản phẩm
              </td>
              <td className="border border-gray-300">Danh mục</td>
              <td className="border border-gray-300">Hình ảnh</td>
              <td className="border border-gray-300 text-center">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300 text-center">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300">Giá giảm</td>
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
          <div></div>
          <span>View 1 - 25 of 30</span>
        </div>
      </div>
    </>
  );
}
