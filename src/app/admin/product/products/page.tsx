import {
  MagnifyingGlassCircleIcon,
  PencilIcon,
  BookmarkSquareIcon,
  TrashIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
export const metadata = {
  title: "Sản phẩm",
  description: "Danh sách sản phẩm",
};

export default function Page() {
  return (
    <>
      <div className="p-4 bg-gray-100 flex justify-between items-center">
        <span className="text-xl">Home / Sản phẩm / Danh sách sản phẩm</span>
        <button className="p-2 bg-blue-500 text-white">+ Thêm mới</button>
      </div>
      <div className="bg-white mt-8 flex pl-4 py-4 items-center">
        <label className="mr-2">Nhóm sản phẩm:</label>
        <select
          id="cars"
          className="w-75 p-2 mr-10 border-2 border-solid border-gray-200"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <label className="mr-2">Tag sản phẩm:</label>
        <select
          id="cars"
          className="w-75 p-2 mr-10 border-2 border-solid border-gray-200"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <div className="border-2 border-solid border-gray-200 flex">
          <input className="p-1 w-70" />
          <button className="flex items-center pl-2 w-10 border-l-2 border-solid border-gray-200 ">
            <MagnifyingGlassCircleIcon className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="px-4 py-3 bg-gray-100 border border-gray-300">
          Danh sách sản phẩm
        </div>
        <table className="border-collapse border border-gray-400 bg-white">
          <thead>
            <tr className="text-left">
              <th className="border border-gray-300">
                <input type="checkbox" />
              </th>
              <th className="border border-gray-300 w-10"></th>
              <th className="border border-gray-300 w-36 mw-36">
                Tên sản phẩm
              </th>
              <th className="border border-gray-300 w-36">Danh mục</th>
              <th className="border border-gray-300 w-36">Hình ảnh</th>
              <th className="border border-gray-300 w-42">Tồn kho</th>
              <th className="border border-gray-300 w-30">Giá</th>
              <th className="border border-gray-300 w-30">Giá giảm</th>
              <th className="border border-gray-300">Bán chạy</th>
              <th className="border border-gray-300">Mới</th>
              <th className="border border-gray-300">Hot</th>
              <th className="border border-gray-300">Khuyến mãi</th>
              <th className="border border-gray-300">Thứ tự</th>
              <th className="border border-gray-300">Ngưng dùng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300 flex">
                <button className="hover:bg-sky-500/100 mr-2 p-1 border border-gray-300 hover:text-white">
                  <PencilIcon className="w-4 h-4" />
                </button>
                <button className="hover:bg-sky-500/100 p-1 border border-gray-300 hover:text-white">
                  <BookmarkSquareIcon className="w-4 h-4" />
                </button>
              </td>
              <td className="border border-gray-300 max-w-36 overflow-hidden text-nowrap text-sky-500">
                Tên sản phẩm Tên sản phẩm Tên sản phẩm Tên sản phẩmTên sản
                phẩmTên sản phẩmTên sản phẩmTên sản phẩm
              </td>
              <td className="border border-gray-300">Danh mục</td>
              <td className="border border-gray-300">Hình ảnh</td>
              <td className="border border-gray-300 max-w-36 overflow-hidden text-nowrap">
                Tồn kho
              </td>
              <td className="border border-gray-300 text-right">Giá</td>
              <td className="border border-gray-300 text-right">Giá giảm</td>
              <td className="border border-gray-300 text-center">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300 text-center">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300 text-center">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300 text-center">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300">Tdứ tự</td>
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
