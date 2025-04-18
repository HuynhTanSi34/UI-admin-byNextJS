import {
  MagnifyingGlassCircleIcon,
  TrashIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
export const metadata = {
  title: "Danh sách Email đăng ký",
  description: "Danh sách Email đăng ký",
};

export default function Page() {
  return (
    <>
      <div className="p-4 bg-gray-100 flex justify-between items-center">
        <span className="text-xl">Home / Khách hàng / Email đăng ký</span>
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
          Danh sách Email đăng ký
        </div>
        <table className="border-collapse border border-gray-400 bg-white w-full">
          <thead>
            <tr className="text-left">
              <th className="border border-gray-300 text-center">
                <input type="checkbox" />
              </th>
              <th className="border border-gray-300">Ngày đăng ký</th>
              <th className="border border-gray-300">Email</th>
              <th className="border border-gray-300">Tên khách hàng</th>
              <th className="border border-gray-300">Điện thoại</th>
              <th className="border border-gray-300">Địa chỉ</th>
              <th className="border border-gray-300">Tỉnh/TP</th>
              <th className="border border-gray-300">Quận huyện</th>
              <th className="border border-gray-300">Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 text-center">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300 "></td>
              <td className="border border-gray-300 max-w-36 overflow-hidden text-nowrap text-sky-500">
                Tên sản phẩm
              </td>
              <td className="border border-gray-300">Tdứ tự</td>
              <td className="border border-gray-300">Tdứ tự</td>
              <td className="border border-gray-300">Tdứ tự</td>
              <td className="border border-gray-300">Tdứ tự</td>
              <td className="border border-gray-300">Tdứ tự</td>
              <td className="border border-gray-300">Tdứ tự</td>
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
