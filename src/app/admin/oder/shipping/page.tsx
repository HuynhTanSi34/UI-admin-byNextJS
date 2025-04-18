import {
  MagnifyingGlassCircleIcon,
  TrashIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
export const metadata = {
  title: "Vận chuyển",
  description: "Danh sách vận chuyển",
};

export default function Page() {
  return (
    <>
      <div className="p-4 bg-gray-100 flex  items-center">
        <span className="text-xl">Home / Đơn hàng / Vận chuyển</span>
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
          Danh sách vận chuyển
        </div>
        <table className="border-collapse border border-gray-400 bg-white w-full">
          <thead>
            <tr className="text-left">
              <th className="border border-gray-300 text-center">
                <input type="checkbox" />
              </th>
              <th className="border border-gray-300">Ngày tạo</th>
              <th className="border border-gray-300">Mã vận chuyển</th>
              <th className="border border-gray-300">Mã đơn hàng</th>
              <th className="border border-gray-300">Khách hàng</th>
              <th className="border border-gray-300">Nhà vận chuyển</th>
              <th className="border border-gray-300">Trạng thái</th>
              <th className="border border-gray-300">Trạng thái COD</th>
              <th className="border border-gray-300">Tiền COD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300 flex"></td>
              <td className="border border-gray-300">Tên sản phẩm</td>
              <td className="border border-gray-300">Danh mục</td>
              <td className="border border-gray-300">Hình ảnh</td>
              <td className="border border-gray-300 ">Tồn kho</td>
              <td className="border border-gray-300 text-right">Giá</td>
              <td className="border border-gray-300 text-right">Giá giảm</td>
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
